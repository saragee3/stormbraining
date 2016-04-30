import thinky from 'thinky';

thinky = thinky({
  host: 'localhost',    // RethinkDB host
  port: 28015,          // RethinkDB driver port
  db: 'stormbraining',  // Database that we are going to use
  authKey: '',
  expressPort: process.env.PORT || 3000,
});

export default thinky;
