
const { start } = require('./app');
const config = require('./config.json');

start(config); // Port will default to 3001 if undefined with start(config, port)

/*
The module exposes four functions for the mock-server:

start(config, port)
Starts the JSON server with the provided config and port number. If no port number is provided, default to 3001.

add(routes)
Updates the JSON server with the provided routes. These should be in the same structure as the initial config. New routes with the same key as any existing ones will overwrite the old ones.

restore()
Any changes to the server routes since initialization (by using the add function) will be reset. The server will use the routes provided during start(...).

stop()
Terminates the server. All routes are cleared and the server will need to be re-initialized with a new config using the start function.
*/
