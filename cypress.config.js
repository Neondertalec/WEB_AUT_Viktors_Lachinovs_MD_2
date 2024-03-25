const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: "https://katalon-demo-cura.herokuapp.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});