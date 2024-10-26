module.exports = ({ env }) => ({
  host: '0.0.0.0', // Bind to all IP addresses
  port: env.int('PORT', 1337), // Use the PORT environment variable
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
