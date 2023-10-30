# Testing with React

### To start from scratch

   npm create vite
   
   > Project name: testing-with-react
   > Select a framework: React
   > Select a variant: Typescript

   cd test-with-react
   npm install
   npm run dev

### add dependencies for Jest, React, etc

   npm install typescript ts-node --save-dev
   npm install jest --save-dev
   npm install ts-jest @types/jest --save-dev
   npm install @testing-library/react --save-dev
   npm install @testing-library/jest-dom --save-dev
   npm install jest-environment-jsdom --save-dev
   npm install identity-obj-proxy --save-dev

### create jest.config.ts

   (see file)

### create mock for static files in  

   test/__mocks__/fileMock.js 

### create tests in __test__ filder

   __test__/App.spec.tsx


NOTE: This folder structure with /test/__mock__ and /__test__ seems a bit janky to me. 
I copied an example but haven't explored how to do it a cleaner way.