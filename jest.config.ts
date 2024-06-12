import type { Config } from "@jest/types";

const baseDir = "<rootDir>/src/app/doubles";
const baseTestDir = "<rootDir>/src/test/doubles";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  // collectCoverageFrom: ["<rootDir>/src/app/**/*.ts"],
  collectCoverageFrom: [`${baseDir}/**/*.ts`],
  testMatch: [`${baseTestDir}/**/*.ts`],
  // used to insert environment variables in test files
  // setupFiles: [
  //   "<rootDir>/config.ts"
  // ]
};

export default config;
