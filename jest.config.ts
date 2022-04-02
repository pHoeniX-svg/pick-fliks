/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.ts'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  coverageReporters: ['html', 'text'],
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    'src/(.*)*': '<rootDir>/src/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
};
