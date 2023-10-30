import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  rootDir: 'src',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
      "^.+\\.tsx?$": "ts-jest" // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png|css)$': '<rootDir>/test/__mocks__/fileMock.js', // mock static files
      '^@app/(.*)$': '<rootDir>/$1',
  },
}

export default jestConfig