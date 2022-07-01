/*
 * @LastEditTime: 2022-07-02 03:17:35
 * @Description:
 * @Date: 2022-05-26 22:58:57
 * @Author: wangshan
 * @LastEditors: wangshan
 */
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
  outputDir: "dist",
  filenameHashing: true,
  lintOnSave: process.env.NODE_ENV !== "production", // 生产构建时弃用eslint-loader
  runtimeCompiler: false, // 关闭运行时编译器
  transpileDependencies: [], // 关闭node_modules模块依赖转译
  productionSourceMap: false, // 关闭生产环境的sourceMap
  //   corssorigin: "anonymous", // 设置注入入口页样式和脚本标签的crossorign属性
  configureWebpack: {
    optimization: {
      // 开启摇树优化
      usedExports: true,
    },
  }, // webpack配置
  //   runtimeCompiler:
  chainWebpack: (config) => {
    if (process.env.build) {
      // 静态打包分析
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    }
    // config.module
    //   .rule("less")
    //   .test(/\.less$/)
    //   .use("style-loader")
    //   .loader("style-loader")
    //   .end()
    //   .use("css-loader")
    //   .loader("css-loader")
    //   .end()
    //   .use("less-loader")
    //   .loader("less-loader")
    //   .end();
  },
  devServer: {
    proxy: {
      "/api": {
        target: "<url>",
        ws: true,
        changeOrigin: true,
      },
    }, // 代理配置
  }, // 开发环境配置
  parallel: process.env.NODE_ENV === "production", // 启用电脑多核心构建
};
