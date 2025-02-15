# Executor & Run Testing Framework

Этот проект содержит модули `Executor` и `run`, предназначенные для выполнения и управления задачами с использованием ограничений потоков, а также предоставляет производительный отчет об их выполнении.

## Особенности

- **Executor Module**:
  - Управляет задачами с помощью очередей `running` и `completed`.
  - Обеспечивает безопасное выполнение задач с различными или одинаковыми `targetId`.
  - Предоставляет подробный производительный отчет с метриками `min`, `max` и `avg`.

- **Run Module**:
  - Поддерживает выполнение задач с разными ограничениями потоков.
  - Обеспечивает корректное выполнение задач в заданной очередности.
  - Генерирует производительные метрики для анализа.

## Результаты тестирования

### Тесты `Executor`

#### `Executor.executeTask()`
- √ `executor.executeTask(init0Task)` добавляет задачу в `executor.executeData.running`.
- √ После выполнения всех задач `executor.executeData.running` пуст.
- √ Выполненная задача перемещается в `executor.executeData.completed`.
- √ Одновременное выполнение двух задач с разными `targetId` проходит успешно.
- √ Одновременное выполнение двух задач с одинаковыми `targetId` вызывает ошибку.

#### `Executor.performanceReport`
- **4 задачи одновременно**:
  - `min`: между `3` и `4` (4).
  - `max`: `4` (4).
  - `avg`: между `3` и `4` (3.153436429545378).
- **3 задачи одновременно, затем 2 задачи**:
  - `min`: `2` (2).
  - `max`: `3` (3).
  - `avg`: между `2` и `3` (2.3628821986104307).

### Тесты `run`

#### `run()` без ограничения потоков
- √ Выполняется успешно.
- √ Все задачи завершены в правильном порядке.
- √ `performance.max` равен `12` (число уникальных `targetId`) (12).
- √ `performance.avg` больше `8.5` (~число уникальных `targetId`) (9.132017941433086).

#### `run()` с ограничением потоков
- **2 потока**:
  - √ Выполняется успешно.
  - √ Все задачи завершены в правильном порядке.
  - √ `performance.max` равен `2` (2).
  - √ `performance.avg` больше `1.5` (1.871081381669938).
- **3 потока**:
  - √ Выполняется успешно.
  - √ Все задачи завершены в правильном порядке.
  - √ `performance.max` равен `3` (3).
  - √ `performance.avg` больше `2` (2.812545085314887).
- **5 потоков**:
  - √ Выполняется успешно.
  - √ Все задачи завершены в правильном порядке.
  - √ `performance.max` равен `5` (5).
  - √ `performance.avg` больше `3.8` (3.9778079719282835).

#### `run()` с модифицируемой очередью
- **2 потока**:
  - √ Выполняется успешно.
  - √ Все задачи завершены в правильном порядке.
  - √ `performance.max` равен `2` (2).
  - √ `performance.avg` больше `1.5` (1.6732894567445642).

#### `run()` с бесконечной очередью
- **3 потока**:
  - √ Выполняется успешно.
  - √ Все задачи завершены в правильном порядке.
  - √ `performance.max` равен `3` (3).
  - √ `performance.avg` больше `2.5` (2.7478134156387166).

### Покрытие кода
 35 passing (20s)

| Файл         | % Stmts | % Branch | % Funcs | % Lines | Непокрытые строки |
|--------------|---------|----------|---------|---------|-------------------|
| **Все файлы** | 100%    | 97.14%   | 100%    | 100%    |                   |
| `Executor.ts` | 100%    | 94.44%   | 100%    | 100%    | 48                |
| `run.ts`      | 100%    | 100%     | 100%    | 100%    |                   |

