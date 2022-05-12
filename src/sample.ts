/* eslint-disable no-console */
import simpleGit from 'simple-git'

async function run(): Promise<void> {
  console.log('Hello world!');

  const log = await simpleGit().log();
  for (const entry of log.all) {
    console.log(entry.hash, entry.message);
  }
}

run()
