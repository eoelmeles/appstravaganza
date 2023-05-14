import type { Config } from 'jest';

export default async (): Promise<Config> => {
  return {
    verbose: true,
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    setupFilesAfterEnv: [
      './node_modules/react-native-gesture-handler/jestSetup.js',
      '<rootDir>/jest.setup.js',
    ],
    transformIgnorePatterns: [
      'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|redux|react-redux|expo-status-bar|formik|react-native-mmkv)',
    ],
    collectCoverageFrom: [
      '<rootDir>/src/Components/**/*.jsx',
      '<rootDir>/src/App.jsx',
      '<rootDir>/src/Components/**/*.tsx',
      '<rootDir>/src/App.tsx',
    ],
    coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
    testMatch: ['**/*.test.ts?(x)', '**/*.test.js?(x)'],
  };
};
