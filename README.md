
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
    √ `executor.performanceReport.avg` is between `3` and `4` (3.163253244044117)

  Executor.performanceReport for 3 simultaneous tasks + 2 simulataneous tasks after
    √ `executor.performanceReport.min` is `2` (2)
    √ `executor.performanceReport.max` `3` (3)
    √ `executor.performanceReport.avg` is between `2` and `3` (2.194551902470738)

test/run.spec.ts
  run() without threads limit
    √ run() executed sucessfully
    √ all tasks completed in proper order
    √ `performance.max` should be `12` (equal to number of distinct `targetId`) (12)
    √ `performance.avg` should be greater than `8.5` (~number of distinct `targetId`) (9.0561701371455)

  run() with 2 max threads
    √ run() executed sucessfully
    √ all tasks completed in proper order
    1) `performance.max` should be `2` (12)
    √ `performance.avg` should be greater than `1.5` (6.134368512516309)

  run() with 3 max threads
    √ run() executed sucessfully
    √ all tasks completed in proper order
    2) `performance.max` should be `3` (12)
    √ `performance.avg` should be greater than `2` (6.611648751549016)

  run() with 5 max threads
    √ run() executed sucessfully
    √ all tasks completed in proper order
    3) `performance.max` should be `5` (12)
    √ `performance.avg` should be greater than `3.8` (7.402142154051507)

  run() with 2 threads on modifying queue
    √ run() executed sucessfully
    4) all tasks completed in proper order
    5) `performance.max` should be `2` (1)
    6) `performance.avg` should be greater than `1.5` (0.9981004467351474)

  run() with 3 threads on infinite queue
    √ run() executed sucessfully
    √ all tasks completed in proper order
    √ `performance.max` should be `3` (3)
    √ `performance.avg` should be greater than `2.5` (2.787084032327528)


  29 passing (8s)
  6 failing

  1) test/run.spec.ts run() with 2 max threads `performance.max` should be `2` (12):

      Error: `performance.max` should be `2` (12)
      + expected - actual

      -2
      +12

      at Test.<anonymous> (test/run.spec.ts:42:7)

  2) test/run.spec.ts run() with 3 max threads `performance.max` should be `3` (12):

      Error: `performance.max` should be `3` (12)
      + expected - actual

      -3
      +12

      at Test.<anonymous> (test/run.spec.ts:61:7)

  3) test/run.spec.ts run() with 5 max threads `performance.max` should be `5` (12):

      Error: `performance.max` should be `5` (12)
      + expected - actual

      -5
      +12

      at Test.<anonymous> (test/run.spec.ts:80:7)

  4) test/run.spec.ts run() with 2 threads on modifying queue all tasks completed in proper order:

      Error: all tasks completed in proper order
      + expected - actual

             "action": "cleanup",
           },
         ],
      -  "1": Array [
      -    Object {
      -      "targetId": 1,
      -      "action": "init",
      -    },
      -    Object {
      -      "targetId": 1,
      -      "action": "prepare",
      -    },
      -    Object {
      -      "targetId": 1,
      -      "action": "work",
      -    },
      -    Object {
      -      "targetId": 1,
      -      "action": "finalize",
      -    },
      -    Object {
      -      "targetId": 1,
      -      "action": "cleanup",
      -    },
      -  ],
      -  "2": Array [
      -    Object {
      -      "targetId": 2,
      -      "action": "init",
      -    },
      -    Object {
      -      "targetId": 2,
      -      "action": "prepare",
      -    },
      -    Object {
      -      "targetId": 2,
      -      "action": "work",
      -    },
      -    Object {
      -      "targetId": 2,
      -      "action": "finalize",
      -    },
      -    Object {
      -      "targetId": 2,
      -      "action": "cleanup",
      -    },
      -  ],
      -  "3": Array [
      -    Object {
      -      "targetId": 3,
      -      "action": "init",
      -    },
      -    Object {
      -      "targetId": 3,
      -      "action": "prepare",
      -    },
      -    Object {
      -      "targetId": 3,
      -      "action": "work",
      -    },
      -    Object {
      -      "targetId": 3,
      -      "action": "finalize",
      -    },
      -    Object {
      -      "targetId": 3,
      -      "action": "cleanup",
      -    },
      -  ],
      -  "4": Array [
      -    Object {
      -      "targetId": 4,
      -      "action": "init",
      -    },
      -    Object {
      -      "targetId": 4,
      -      "action": "prepare",
      -    },
      -    Object {
      -      "targetId": 4,
      -      "action": "work",
      -    },
      -    Object {
      -      "targetId": 4,
      -      "action": "finalize",
      -    },
      -    Object {
      -      "targetId": 4,
      -      "action": "cleanup",
      -    },
      -  ],
      -  "5": Array [
      -    Object {
      -      "targetId": 5,
      -      "action": "init",
      -    },
      -    Object {
      -      "targetId": 5,
      -      "action": "prepare",
      -    },
      -    Object {
      -      "targetId": 5,
      -      "action": "work",
      -    },
      -    Object {
      -      "targetId": 5,
      -      "action": "finalize",
      -    },
      -    Object {
      -      "targetId": 5,
      -      "action": "cleanup",
      -    },
      -  ],
      -  "6": Array [
      -    Object {
      -      "targetId": 6,
      -      "action": "init",
      -    },
      -    Object {
      -      "targetId": 6,
      -      "action": "prepare",
      -    },
      -    Object {
      -      "targetId": 6,
      -      "action": "work",
      -    },
      -    Object {
      -      "targetId": 6,
      -      "action": "finalize",
      -    },
      -    Object {
      -      "targetId": 6,
      -      "action": "cleanup",
      -    },
      -  ],
      -  "7": Array [
      -    Object {
      -      "targetId": 7,
      -      "action": "init",
      -    },
      -    Object {
      -      "targetId": 7,
      -      "action": "prepare",
      -    },
      -    Object {
      -      "targetId": 7,
      -      "action": "work",
      -    },
      -    Object {
      -      "targetId": 7,
      -      "action": "finalize",
      -    },
      -    Object {
      -      "targetId": 7,
      -      "action": "cleanup",
      -    },
      -  ],
      -  "8": Array [
      -    Object {
      -      "targetId": 8,
      -      "action": "init",
      -    },
      -    Object {
      -      "targetId": 8,
      -      "action": "prepare",
      -    },
      -    Object {
      -      "targetId": 8,
      -      "action": "work",
      -    },
      -    Object {
      -      "targetId": 8,
      -      "action": "finalize",
      -    },
      -    Object {
      -      "targetId": 8,
      -      "action": "cleanup",
      -    },
      -  ],
      -  "9": Array [
      -    Object {
      -      "targetId": 9,
      -      "action": "init",
      -    },
      -    Object {
      -      "targetId": 9,
      -      "action": "prepare",
      -    },
      -    Object {
      -      "targetId": 9,
      -      "action": "work",
      -    },
      -    Object {
      -      "targetId": 9,
      -      "action": "finalize",
      -    },
      -    Object {
      -      "targetId": 9,
      -      "action": "cleanup",
      -    },
      -  ],
      -  "10": Array [
      -    Object {
      -      "targetId": 10,
      -      "action": "init",
      -    },
      -    Object {
      -      "targetId": 10,
      -      "action": "prepare",
      -    },
      -    Object {
      -      "targetId": 10,
      -      "action": "work",
      -    },
      -    Object {
      -      "targetId": 10,
      -      "action": "finalize",
      -    },
      -    Object {
      -      "targetId": 10,
      -      "action": "cleanup",
      -    },
      -  ],
      -  "11": Array [
      -    Object {
      -      "targetId": 11,
      -      "action": "init",
      -    },
      -    Object {
      -      "targetId": 11,
      -      "action": "prepare",
      -    },
      -    Object {
      -      "targetId": 11,
      -      "action": "work",
      -    },
      -    Object {
      -      "targetId": 11,
      -      "action": "finalize",
      -    },
      -    Object {
      -      "targetId": 11,
      -      "action": "cleanup",
      -    },
      -  ],
       }

      at Test.<anonymous> (test/run.spec.ts:180:7)

  5) test/run.spec.ts run() with 2 threads on modifying queue `performance.max` should be `2` (1):

      Error: `performance.max` should be `2` (1)
      + expected - actual

      -2
      +1

      at Test.<anonymous> (test/run.spec.ts:183:7)

  6) test/run.spec.ts run() with 2 threads on modifying queue `performance.avg` should be greater than `1.5` (0.9981004467351474):
     Error: `performance.avg` should be greater than `1.5` (0.9981004467351474)
      at Test.<anonymous> (test/run.spec.ts:185:7)

-------------|----------|----------|----------|----------|-------------------|
File         |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------|----------|----------|----------|----------|-------------------|
All files    |      100 |    97.14 |      100 |      100 |                   |
 Executor.ts |      100 |    94.44 |      100 |      100 |                48 |
 run.ts      |      100 |      100 |      100 |      100 |                   |
-------------|----------|----------|----------|----------|-------------------|
