# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Create a new project

λ npm init vite@latest
√ Project name: ... vite-vue-component-library
√ Select a framework: » Vue
√ Select a variant: » TypeScript

## Creating a Component Library

We need to remove a few files that we are not going to need since this is a library, and we’ll also need to update the project configuration so that it can correctly build and bundle our library.

### Remove obsolete files

Remove the following files as they are not needed in a component library:
• index.html
• src/App.vue
• src/app.css (or style.css)
• src/main.ts
• src/assets/logo.svg (or vue.svg)
Remove also the public directory and all its contents.

### Add main entry index.ts file
Add new new file under src/ called index.ts that will just export everything from the components/ sub-directory

### Update vite.config.ts
### Update package.json commands

### Create some component

### Build our library

Now finally run the “build” command (or you could run the “all” command) to compile and build our library:

```shell
npm run build
```

### Consuming our library
To consume our library locally, let’s switch now to our vite-vue-project and install a reference to our library by running this command:

```shell
npm install -D file:../vite-vue-component-library
```

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.
