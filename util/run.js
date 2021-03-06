const kill = require("tree-kill");
const spawn = require("child_process").spawn;
const out = require("./handlers/out");
const { flags } = require("../data/constants");
const { yellowBright } = require("chalk");

module.exports.run = (file) => {
  const subprocess = spawn(`node`, [file]);
  console.log(
    `${flags.green} ${yellowBright(
      `type in \`restart | rs\` to restart and \`exit | e\` to exit.`
    )}`
  );
  console.log(`${flags.green} ${yellowBright(`running file \`${file}\`.`)}`);
  out(subprocess);
  return {
    kill: () => {
      kill(subprocess.pid);
    },
  };
};
