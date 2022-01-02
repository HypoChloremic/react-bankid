# react-bankid
Integrating Bankid for signin process

## Links
***bankid test-environment setup for client***: https://www.bankid.com/en/utvecklare/test/skaffa-testbankid/testbankid-konfiguration

# navbar
## Imports
`yarn add bankid`
`yarn add @headlessui/react`
`yarn add @heroicons/react`

`yarn add tailwindcss@latest postcss@latest autoprefixer@latest postcss-cli`
`touch postcss.config.js`
```jsx
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

`npx tailwindcss init --full`
This generates a tailwind.config.js file that we can modify and custom like we want.

Inside the ./styles/globals.css file we need to add this content, in the end
```jsx
/* ./styles/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

We then need to add a couple of scripts to package.json
./package.json
```json
{
  "name": "ourapp",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "build:css": "postcss styles/tailwind.css -o styles/main.css",
    "build:watch": "postcss styles/tailwind.css -o styles/main.css --watch",
    "prod:build": "NODE_ENV=production yarn run build:css && yarn run build"
  },
  "dependencies": {
    "autoprefixer": "^10.1.0",
    "next": "10.0.4",
    "postcss": "^8.2.1",
    "postcss-cli": "^8.3.1",
    "react": "17.0.1",
    "react-dom": "17.0.1",
    "tailwindcss": "^2.0.2"
  }
}
```

Finally we execute
`yarn build:css`