<!-- @format -->

# introduction-to-nodejs

Scott Moss, Frontend Masters course [Introduction to Node.js](https://frontendmasters.com/courses/node-js/) `4 hours 50 minutes`

The reposity has the four (4) parts:

1. api
2. cli
3. testing
4. modules (internal, personal and remote)

# 1. API (async code)

Build a simple API with `http` module.

- location `/api`
- commands - start the server - `node api/server.js`
- endpoint `GET /`

## exercise

Refactor and fix a simple static asset server. The server uses blocking sync code and crashes whenever a request comes in that is asking for and asset that is not found. Neither of those are desirable. You'll also have to teach the server how to server the assets it has in the assets folder.

# 2. CLI (npm)

Create a CLI program that saves and retrieves entrepreneurs contacts from and address book. The program uses the fileSystem to get things to work.

- location: `/cli`
- commands
  - `new` - `node cli/index.js new`
  - `list`- `node cli/index.js list`

## npm modules

- `commander` for node.js command-line interface, to create `new` and `list` commands
- `inquier.prompt` to launch the prompt interface

## excercises

1. fix the CLI so the `new` command works by saving contacts to `entrepreneurs.json`
2. fix the CLI so that the `list` command works by listing all the entrepreneurs and allowing you to select one, then prints out the selected entrepreneur

# 3. MODULES

- location: `modules/`
- command:
  - playing with modules: `node app.js`

# 4. TESTING

- location: `testing/`
- commands:
  - start the server: `node testing/server.js`
  - debbug mode: `node --inspect testing/server.js`
  - test: `npx jest`
- endpoints:
  - `GET /users/:id`
  - `DELETE /users/:id`

## exercise

Debug and track down some issues in a small app. Use your logging and inspector to find them. Try and fix them. Write tests to make sure it stays fixed
