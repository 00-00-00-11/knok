const chokidar = require("chokidar");
module.exports.watch = (callback) => {
  chokidar.watch(".").on("change", (event) => {
    if (event.startsWith("node_modules")) return;
    callback();
  });
};
