
mock-json-server?

https://github.com/typicode/json-server?

https://www.npmjs.com/package/json-mock-server

CLI


    json-mock-server --config path-to-config-file --port 3434

    --config || -c - Defines the path to the config file relative to the current directory. By default, the command will look for a mock-server.config.js file in the current directory.

    --port || -p - The port that the server will run on. Defaults to 3001.

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

### line endings problem

/Users/kvogel/Projects/wp-userman/yarn-line-endings.md

