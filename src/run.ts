import { IExecutor } from './Executor';
import ITask from './Task';

export default async function run(executor: IExecutor, queue: AsyncIterable<ITask>, maxThreads = 0) {
    maxThreads = Math.max(0, maxThreads);
    const completed = new Map<number, ITask[]>();
    const running = new Map<number, Promise<void>>();
    const pending = new Map<number, ITask[]>();

    function recordTask(task: ITask) {
        const tasks = completed.get(task.targetId) || [];
        tasks.push(task);
        completed.set(task.targetId, tasks);
    }

    async function executeTask(task: ITask): Promise<void> {
        try {
            await executor.executeTask(task);
            recordTask(task);
        } finally {
            running.delete(task.targetId);

            const tasks = pending.get(task.targetId);
            if (tasks && tasks.length > 0) {
                const nextTask = tasks.shift()!;
                if (tasks.length === 0) {
                    pending.delete(task.targetId);
                }
                const promise = executeTask(nextTask);
                running.set(task.targetId, promise);
            }
        }
    }

    async function waitForThread() {
        if (maxThreads === 0 || running.size < maxThreads) {
            return;
        }
        await Promise.race(Array.from(running.values()));
    }

    for await (const task of queue) {
        if (running.has(task.targetId)) {
            const tasks = pending.get(task.targetId) || [];
            tasks.push(task);
            pending.set(task.targetId, tasks);
            continue;
        }

        await waitForThread();
        const promise = executeTask(task);
        running.set(task.targetId, promise);
    }

    while (running.size > 0) {
        await Promise.race(Array.from(running.values()));
    }

    return completed;
}
