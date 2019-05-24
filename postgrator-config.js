'use strict';

const dotenv = require('dotenv');

module.exports = {
  'migrationDirectory': 'migrations',
  'driver': 'pg',
  'host': process.env.MIGRATION_DB_HOST,
  'port': process.env.MIGRATION_DB_PORT,
  'database': process.env.MIGRATION_DB_NAME,
  'username': process.env.MIGRATION_DB_NAME,
  'username': 'process.env.MIGRATION_DB_USER',
  'ssl': process.env.NODE_ENV === 'production' ? true : false
}