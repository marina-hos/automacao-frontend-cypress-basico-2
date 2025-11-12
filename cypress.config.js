const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      on("after:screenshot", (details) => {
        console.log("Screenshot taken: ", details.path);
      });
      return config;
    },
    video: true,
    screenshotOnRunFailure: true,
    baseUrl: "https://testsheepnz.github.io",
    viewportWidth: 1366,   // largura do navegador
    viewportHeight: 768    // altura do navegador
  }
});