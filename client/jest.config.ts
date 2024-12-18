import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["./setupTests.ts"],
    moduleNameMapper: {
        "\\.(css|less)$": "<rootDir>/jest-config/mocks/styleMock.js"
    },
    moduleFileExtensions: ["tsx", "ts", "js", "json", "node"],
    transform: {
        "^.+.tsx?$": ["ts-jest", {}]
    },
    transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"]
};

export default config;
