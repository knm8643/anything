const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/anything/",
  // indexPath: '../dist/index.html',
  outputDir: "build",
  productionSourceMap: true,
});
