<!-- @format -->

# notes

## debugging

- level 1: `console.log`. In production, record your logs.
- level 2: use _node inspector_; e.g. `node --inspect server.js`, open `chrome://inspect` and add some breakpoints
- level 3: `VS code` debugger

## testing

You can test anything in node: browser app,api's, cli's, script, tools, etc.

### anatomy of tests

1. your code to be tested
2. test suites
3. assertion library
4. other tools, e.g. moch, spies

### type os test

1. unit
2. integration
3. end-to-ed
4. UI
5. snapshot
6. performance

### endpoint execution

Use [HTTPie](https://httpie.org/) module to execute endpoint in a user-friendly command-line:

- `$ http :3001/user/1`
- `$ http DELETE :3001/user/1`

# exercise

- Debug and track down some issues in a small app. Use your logging and inspector to find them.
- Try and fix them
- Write tests to make sure it stays fixed
