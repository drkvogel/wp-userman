
### line ending error when running npm bin executable installed with yarn

in `./server` (set up using `yarn`):

```
[  5:53am ]  [ kvogel@kvogel-macbook-2018:~/Projects/wp-userman/server(master✗) ]
 $ npm run server
> @ server /Users/kvogel/Projects/wp-userman/server
> json-mock-server
env: node\r: No such file or directory
npm ERR! file sh
npm ERR! code ELIFECYCLE
npm ERR! errno ENOENT
npm ERR! syscall spawn
npm ERR! @ server: `json-mock-server`
npm ERR! spawn ENOENT
npm ERR! Failed at the @ server script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/kvogel/.npm/_logs/2018-10-12T04_53_28_849Z-debug.log
```

but in `./test` (set up with `npm`):

```
[  5:57am ]  [ kvogel@kvogel-macbook-2018:~/Projects/wp-userman/test(master✗) ]
 $ npm run server
> test@1.0.0 server /Users/kvogel/Projects/wp-userman/test
> json-mock-server
[ERROR json-mock-server] - Could not resolve path: "/Users/kvogel/Projects/wp-userman/test/mock-server.config.js"
Default config file could not be found. To specify a filepath use `--config`
```

i.e. it works, though throws an error because I didn't create a config file.

In **both** cases, some of the files in `./node_modules/json-mock-server/` have `CRLF` (Windows) line endings. But one set work, when called from the `.bin` folder or with `npm run`, and the others throw an error when run either way.

Remember, `crlf` (`\r\n`) is Windows, `lf` (`\n`) is Unix/Linux/OSX/MacOS. `\r` used to be Mac:

>In Unix text files line endings exists out of a single Newline character which is equal to a DOS Line Feed (LF) character. In Mac text files, prior to Mac OS X, line endings exist out of a single Carriage Return character. Mac OS X is Unix based and has the same line endings as Unix.

Let's try a fresh `yarn` install:

```
[  6:20am ]  [ kvogel@kvogel-macbook-2018:~/Projects/wp-userman(master✗) ]
 $ cd test2-yarn
[  6:21am ]  [ kvogel@kvogel-macbook-2018:~/Projects/wp-userman/test2-yarn(master✗) ]
 $ yarn add json-mock-server --dev
yarn add v1.10.1
info No lockfile found.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
success Saved lockfile.
success Saved 48 new dependencies.
info Direct dependencies
└─ json-mock-server@0.0.6
...
[  6:21am ]  [ kvogel@kvogel-macbook-2018:~/Projects/wp-userman/test2-yarn(master✗) ]
 $ npm bin
/Users/kvogel/Projects/wp-userman/test2-yarn/node_modules/.bin
```

and try to run `json-mock-server`:

```
[  6:21am ]  [ kvogel@kvogel-macbook-2018:~/Projects/wp-userman/test2-yarn(master✗) ]
 $ /Users/kvogel/Projects/wp-userman/test2-yarn/node_modules/.bin/json-mock-server
env: node\r: No such file or directory
```

Error about line endings: `env: node\r: No such file or directory`.

Now let's try installing with `npm`:

```
 $ cd ../test3-npm
[  6:21am ]  [ kvogel@kvogel-macbook-2018:~/Projects/wp-userman/test3-npm(master✗) ]
 $ npm i --save-dev json-mock-server
npm WARN saveError ENOENT: no such file or directory, open '/Users/kvogel/Projects/wp-userman/test3-npm/package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open '/Users/kvogel/Projects/wp-userman/test3-npm/package.json'
npm WARN test3-npm No description
npm WARN test3-npm No repository field.
npm WARN test3-npm No README data
npm WARN test3-npm No license field.
+ json-mock-server@0.0.6
added 55 packages from 29 contributors and audited 76 packages in 3.966s
found 0 vulnerabilities
[  6:22am ]  [ kvogel@kvogel-macbook-2018:~/Projects/wp-userman/test3-npm(master✗) ]
 $ npm bin
/Users/kvogel/Projects/wp-userman/test3-npm/node_modules/.bin
```

and run:

[  6:22am ]  [ kvogel@kvogel-macbook-2018:~/Projects/wp-userman/test3-npm(master✗) ]
 $ /Users/kvogel/Projects/wp-userman/test3-npm/node_modules/.bin/json-mock-server
[ERROR json-mock-server] - Could not resolve path: "/Users/kvogel/Projects/wp-userman/test3-npm/mock-server.config.js"
Default config file could not be found. To specify a filepath use `--config`
```

No error about line endings.

Don't know why. Might post on SO.

Avoid `yarn` for now.
