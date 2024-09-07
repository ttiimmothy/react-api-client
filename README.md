# React Api Clients

[![npm version](https://img.shields.io/npm/v/react-api-clients.svg)](https://www.npmjs.com/package/react-api-clients)

A npm package for calling APIs in React.

## For building the package

```bash
npm pkg set main="lib/index.js" types="lib/index.d.ts" scripts.build="tsc" scripts.prepare="npm run build"
```

## Publishing

To publish a new version of the package:

1. Update the version in package.json

```bash
npm version patch
```

2. Publish to npm

```bash
npm publish
```

## For using the package

```bash
npm install react-api-clients
# or
yarn add react-api-clients
# or
pnpm add react-api-clients
# or
bun add react-api-clients
```

## Usage

```ts
import { callApi } from "react-api-clients";

const data = await callApi("https://jsonplaceholder.typicode.com/todos/1");
```

## License

React Api Clients is licensed under the Apache License, Version 2.0. See the [LICENSE](./LICENSE) file for more details.