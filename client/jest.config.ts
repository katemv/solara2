import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["./setupTests.ts"],
    moduleNameMapper: {
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
        "^.+\\.svg$": "<rootDir>/__mocks__/svgMock.js",
        "^.+\\.png$": "<rootDir>/__mocks__/pngMock.js",
        "^react-markdown$": "<rootDir>/src/utils/test-setup/reactMarkdownMock.tsx",
    },
    moduleFileExtensions: ["tsx", "ts", "js", "json", "node"],
    transform: {
        "^.+.tsx?$": ["ts-jest", {}]
    },
    transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
    "collectCoverageFrom": [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/**/*.d.ts",
        "!src/api/constants.ts",
        "!src/**/*.stories.{tsx,ts}"
    ]
};

export default config;
