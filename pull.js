const chalk = require("chalk");
const config = require("./config.js");
const child = require("child_process");

const { Octokit } = require("@octokit/core");
const octokit = new Octokit({
  auth: config.token,
});

(async () => {
  console.log(chalk.cyanBright("|------------------------------"))
  console.log(chalk.cyanBright("| ") + chalk.yellowBright("Github Auto Pull"))
  console.log(chalk.cyanBright("| "))
  console.log(chalk.cyanBright("| ") + chalk.yellow("Coming Soon!"))
  console.log(chalk.cyanBright("|------------------------------"))
})();
