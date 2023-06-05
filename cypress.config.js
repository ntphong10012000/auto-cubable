const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
 
    specPattern: 'cypress/integration/examples/*.js',
  },
  
    viewportWidth: 1900,
    viewportHeight: 1000,
  
});
