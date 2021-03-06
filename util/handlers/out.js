const { redBright, yellow } = require("chalk");
const { flags } = require("../../data/constants");
module.exports = (subprocess) => {
  subprocess.stdout.on("data", (data) => {
    console.log(`${data}`);
  });

  subprocess.stderr.on("data", (data) => {
    console.log(`${data}`);
  });

  subprocess.on("exit", (code) => {
    const description = `process exited with code ${code}.`;
    const log =
      code === 0
        ? `${flags.green} ${
            code === 0 ? yellow(description) : redBright(description)
          }`
        : `${flags.red} ${
            code === 0 ? yellow(description) : redBright(description)
          }`;
    console.log(log);
  });
};
