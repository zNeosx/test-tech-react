# Technical test

## The purpose of this technical test is to validate a ``minimum level`` of knowledge in ReactJS
The purpose of this technical test is to validate a minimum level of knowledge in `ReactJS` by demonstrating my ability to start a project that uses `React` and the Css framwork `Tailwind`, in order to drive an external API: [jsonplaceholder](https://jsonplaceholder.typicode.com), to generate a user list, their profiles and their personal data.

The test goes further by offering different routes like their profile pages that display a list of their posts and the comments related to them in a secondary view.

The project includes other features such as the ability to publish a post on a user's profile.

This test was proposed by Arnaud Desportes. [Arnaud Desportes](https://arnaud-desportes.fr/)

## Getting Started

This project was bootstrapped with [Vite Js]
This project uses the Tailwind css framwork to speed up the creation process.

After installing all the dependencies with : 

### `pnpm install`

In the project directory, you can run:

### `pnpm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
