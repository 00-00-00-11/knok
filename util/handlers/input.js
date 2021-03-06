const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = (callback) => {
  readline.question("", (command) => {
    if (command === "exit" || command === "e") {
      process.exit(0);
    } else if (
      command === "restart" ||
      command === "reboot" ||
      command === "rs"
    ) {
      callback();
      input(callback);
    }
  });
};

module.exports = input;
