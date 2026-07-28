import { rm } from 'node:fs/promises';

const outputDirectories = ['dist', 'coverage', 'node_modules/.tmp'];

await Promise.all(
  outputDirectories.map((directory) => rm(directory, { force: true, recursive: true })),
);
