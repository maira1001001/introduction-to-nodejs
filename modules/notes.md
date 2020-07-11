<!-- @format -->

# notes

## globals

- `process`: info about environment
- `require`:
- `__direname`: current directory path
- `module`: information about current module
- `global`, never use it

## modules

> "All your Nodejs code are modules" Scott Moss

```
var module1 = (function(exports, require, module, __filename, __direname){
    // your nodejs code in a file
})

var module2 = (function(exports, require, module, __filename, __direname){
    // your nodejs code in another file
})
```

### types of modules

- internal
- remote (npm)
- personal

- nodejs uses [commonjs](https://requirejs.org/docs/commonjs.html) for its module system

## tools

- [gulp](https://gulpjs.com/) a tool to automate and enhance your workflow
