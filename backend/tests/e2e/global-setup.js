module.exports = async () => {
  console.log('Running global setup: seeding database');
  // Seed the database to a known state before tests
  require('../../database/seed.js');
};