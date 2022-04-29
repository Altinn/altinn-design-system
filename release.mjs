#!/usr/bin/env yarn node

import semver from "semver";
import simpleGit from "simple-git";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { readFile, writeFile } from "fs/promises";

const RELEASE_BRANCH = "main";

async function readJson(path) {
  try {
    const json = JSON.parse(await readFile(new URL(path, import.meta.url)));
    return json;
  } catch (e) {
    throw `Cannot parse "${path}" as JSON`;
  }
}

async function writeJson(path, object) {
  const stringifiedJson = JSON.stringify(object, null, 2) + "\n";
  return await writeFile(new URL(path, import.meta.url), stringifiedJson);
}

const { forceUnclean, _: commands } = yargs(hideBin(process.argv))
  .wrap(null)
  .usage(
    "./$0 <type>\n\nPrepare a release by bumping the package version and creating a git tag.\nOnce prepared, you can push to the repository to trigger CI/CD."
  )
  .command("patch", "Bump the patch version X.X.Y")
  .command("minor", "Bump the patch version X.Y.0")
  .command("major", "Bump the patch version Y.0.0")
  .option("force-unclean", {
    describe: "Force creating a release even if local repo is not clean",
  })
  .strictCommands()
  .demandCommand()
  .strictOptions().argv;

const branchInfo = await simpleGit().branch();

if (branchInfo.current !== RELEASE_BRANCH) {
  console.log(
    `Releases should happen in branch "${RELEASE_BRANCH}"; current branch is "${branchInfo.current}"`
  );
  process.exit(1);
}

await simpleGit().fetch();

const gitStatus = await simpleGit().status();

if (gitStatus.behind > 0) {
  console.log("Local repo is behind remote; run `git pull`");
  process.exit(1);
}

if (gitStatus.files.length > 0 && !forceUnclean) {
  console.log("Local repo is not clean; run `git status`");
  process.exit(1);
}

const packageJson = await readJson("./package.json");
const currentVersion = packageJson.version;

if (!semver.valid(currentVersion)) {
  console.log(`Version "${currentVersion}" in \`package.json\` is not valid`);
  process.exit(1);
}

const releaseType = commands[0];
const newVersion = semver.inc(currentVersion, releaseType);

console.log(`Creating release ${newVersion}`);

packageJson.version = newVersion;
await writeJson("./package.json", packageJson);
console.log("- bump version in package.json");

await simpleGit().add("./package.json").commit(`Bump to version ${newVersion}`);
console.log("- commit new version");

await simpleGit().addAnnotatedTag(`v${newVersion}`, `Release ${newVersion}`);
console.log("- create tag");
console.log("Done; now run `git push --follow-tags` to trigger CI/CD");
