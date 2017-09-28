const mix = require('laravel-mix');

// Add test environment to Laravel Mix.
const isTestEnvironment = process.env.NODE_ENV === 'test';
mix.inTest = function() {
    return isTestEnvironment;
}
mix.options({test: isTestEnvironment});
mix.config.inTest = isTestEnvironment;

// Add development environment to Laravel Mix.
const isDevelopmentEnvironment = process.env.NODE_ENV === 'development';
mix.inDevelopment = function() {
    return isDevelopmentEnvironment;
}

module.exports = {
    inProduction: mix.inProduction,
    inDevelopment: mix.inDevelopment,
    inTest: mix.inTest,
}
