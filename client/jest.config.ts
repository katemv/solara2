import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    moduleFileExtensions: ["tsx", "ts", "js", "json", "node"],
    moduleNameMapper: {
        "\\.(css|less)$": "<rootDir>/jest-config/mocks/styleMock.js"
    },
    setupFilesAfterEnv: ["./setupTests.ts"],
    transform: {
        "^.+.tsx?$": ["ts-jest", {}]
    },
    transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
    testEnvironment: "jsdom"
};

export default config;
