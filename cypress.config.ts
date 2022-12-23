import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "ob667t",
  e2e: {
    env:{
      RECORD_KEY:"338953ea-d5f3-4f86-b018-1a40d3bd8afc",
    },
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
