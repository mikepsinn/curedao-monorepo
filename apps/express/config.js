/**
 * Configuration file for the Express application.
 * Exports an object with various configuration properties.
 * @typedef {Object} Config
 * @property {string} ROOT_DIR - The root directory of the application
 * @property {number} URL_PORT - The port the application will run on
 * @property {string} URL_PATH - The base URL path for the application
 * @property {string} BASE_VERSION - The base API version
 * @property {string} CONTROLLER_DIRECTORY - Directory where route controllers are located
 * @property {string} PROJECT_DIR - The root directory of the project
 */

const path = require('path');

const config = {
  ROOT_DIR: __dirname,
  URL_PORT: 8080,
  URL_PATH: 'https://safe.dfda.earth',
  BASE_VERSION: '/api',
  CONTROLLER_DIRECTORY: path.join(__dirname, 'controllers'),
  PROJECT_DIR: __dirname,
};

/**
 * The full path to the OpenAPI specification file.
 * @type {string}
 */
config.OPENAPI_YAML = path.join(config.ROOT_DIR, 'api', 'openapi.yaml');

/**
 * The full URL path for the API, including port and base version.
 * @type {string}
 */
config.FULL_PATH = `${config.URL_PATH}:${config.URL_PORT}/${config.BASE_VERSION}`;

/**
 * The directory where uploaded files will be stored.
 * @type {string}
 */
config.FILE_UPLOAD_PATH = path.join(config.PROJECT_DIR, 'uploaded_files');

module.exports = config;
