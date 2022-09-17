const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          additionalData: `@import "@/assets/css/app.scss";`,
        },
        additionalData: `@import "@/assets/css/app.scss";`,
      },
    },
  },
});
