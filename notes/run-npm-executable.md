
### how to run executable installed in node_modules by npm

https://stackoverflow.com/questions/9679932/how-to-use-package-installed-locally-in-node-modules

`npm bin` shows the location of the `.bin` folder.
`npm run-script` with no arguments lists node executables under the current directory.
`npm run` is shorthand for `npm run-script`. See https://docs.npmjs.com/cli/run-script.

Add something like:

```json
    "scripts": {
        // ...
        "server": "json-mock-server"
    }
```

to `package.json`, then do `npm run server`.

Or use [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b).