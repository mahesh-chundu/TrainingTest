import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "ss7ape",
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      let value:any;

      on("task", {
        log(message) {
          console.log(message);

          return null;
        },

        save(v) {
          value = v;

          return null;
        },

        load() {
          return value || null;
        },
      });
      // implement node event listeners here
    },
  },
});
