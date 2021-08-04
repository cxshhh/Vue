const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
publicPath: process.env.NODE_ENV === "development"? "./":"/",
chainWebpack: config => {
  config.resolve.alias.set("@a", resolve("src")).set("src",resolve("src"));
  config.plugin("html").tap(args => {
  args[0].title = 'hhh'
  return args;
  });
},

devServer: {
publicPath: process.env.NODE_ENV === "development"? "/":"./",
proxy: {
"/api":{
target: "http://127.0.0.1:8000/",
changeOrigin: true,
pathRewrite:{
"^/api":"/api",
},
},
},
},
};