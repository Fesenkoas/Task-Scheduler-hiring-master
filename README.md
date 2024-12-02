
> @linkedhelper/hiring@1.4.1 test
> tap --reporter=spec -t600 test/*.spec.ts


test/Executor.spec.ts
  Executor.executeTask()
    √ `executor.executeTask(init0Task)` places task into `executor.executeData.running`
    √ after execution of all tasks `executor.executeData.running` is empty
    √ executed `init0Task` is placed into `executor.executeData.completed`
    √ simultaneous execution of two tasks with different `targetId` should not throw
    √ simultaneous execution of two tasks with the same `targetId` should throw

  Executor.performanceReport for 4 simultaneous tasks
    √ `executor.performanceReport.min` is between `3` and `4` (4)
    √ `executor.performanceReport.max` `4` (4)
    √ `executor.performanceReport.avg` is between `3` and `4` (3.153436429545378)

  Executor.performanceReport for 3 simultaneous tasks + 2 simulataneous tasks after
    √ `executor.performanceReport.min` is `2` (2)
    √ `executor.performanceReport.max` `3` (3)
    √ `executor.performanceReport.avg` is between `2` and `3` (2.3628821986104307)

test/run.spec.ts
  run() without threads limit
    √ run() executed sucessfully
    √ all tasks completed in proper order
    √ `performance.max` should be `12` (equal to number of distinct `targetId`) (12)
    √ `performance.avg` should be greater than `8.5` (~number of distinct `targetId`) (9.132017941433086)

  run() with 2 max threads
    √ run() executed sucessfully
    √ all tasks completed in proper order
    √ `performance.max` should be `2` (2)
    √ `performance.avg` should be greater than `1.5` (1.871081381669938)

  run() with 3 max threads
    √ run() executed sucessfully
    √ all tasks completed in proper order
    √ `performance.max` should be `3` (3)
    √ `performance.avg` should be greater than `2` (2.812545085314887)

  run() with 5 max threads
    √ run() executed sucessfully
    √ all tasks completed in proper order
    √ `performance.max` should be `5` (5)
    √ `performance.avg` should be greater than `3.8` (3.9778079719282835)

  run() with 2 threads on modifying queue
    √ run() executed sucessfully
    √ all tasks completed in proper order
    √ `performance.max` should be `2` (2)
    √ `performance.avg` should be greater than `1.5` (1.6732894567445642)

  run() with 3 threads on infinite queue
    √ run() executed sucessfully
    √ all tasks completed in proper order
    √ `performance.max` should be `3` (3)
    √ `performance.avg` should be greater than `2.5` (2.7478134156387166)


  35 passing (20s)
-------------|----------|----------|----------|----------|-------------------|
File         |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------|----------|----------|----------|----------|-------------------|
All files    |      100 |    97.14 |      100 |      100 |                   |
 Executor.ts |      100 |    94.44 |      100 |      100 |                48 |
 run.ts      |      100 |      100 |      100 |      100 |                   |
-------------|----------|----------|----------|----------|-------------------|
