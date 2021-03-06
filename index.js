#!/usr/bin/env node
const file = process.argv.slice(2)[0];
console.log(file);
const { run } = require("./util/run");
const { watch } = require("./util/watch");
const { flags } = require("./data/constants");
const { yellow } = require("chalk");
const input = require("./util/handlers/input");

if (!file) throw new Error("A file must be mentioned.");

let runner = run(file);

const restart = () => {
  console.log(flags.green + yellow(` restarting \`${file}\`.`));
  runner.kill();
  runner = run(file);
};

input(() => {
  restart();
});

watch(() => {
  restart();
});
