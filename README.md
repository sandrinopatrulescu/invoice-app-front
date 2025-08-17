# invoice-app-front

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Creation

```bash
npm create vue@latest
# Select features to include in your project: TypeScript, Router (SPA development), Pinia (state management), ESLint (error prevention), Prettier (code formatting)
# Select experimental features to include in your project: none
# Skip all example code and start with a blank Vue project? Yes
```

## GitHub Pages deploy

Create a worktree folder one level up, bound to branch `branchName`

```bash
branchName="gh-pages"
directoryPath="../${PWD##*/}_gh-pages"

git worktree add -B "${branchName}" "${directoryPath}"
# remove code files
# commit and push
```

then use [gh-pages-deploy.sh](gh-pages-deploy.sh) to deploy the project to GitHub Pages.
