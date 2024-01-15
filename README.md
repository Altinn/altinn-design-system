# Design system for Altinn

https://designsystem.altinn.studio

⚠️ This library is used for components that are unique for Altinn. We have moved reusable core components that can be used in multiple products and situations to [designsystemet.no](https://www.designsystemet.no).
We will continue to develop reusable components there.


## How to install

To add the design system to your project, navigate to the directory where your `package.json` file is located and run one of the following commands:

### NPM

```
npm install @altinn/altinn-design-system
```

### Yarn

```
yarn add @altinn/altinn-design-system
```

### Prerequisites

As of version **0.27**, this design system is no longer compatible with [the old design system](https://github.com/Altinn/DesignSystem).
This is because the old design system sets the `rem` unit to `10px`, while the default is `16px`, and this is also the unit expected by the Figma tokens.
In older versions, these tokens are converted to match the `rem` unit of the old design system.

### Linking

If you plan on making any contributions to the design system and develop features/test changes with a more rapid feedback loop, you'll most likely want to link your project to a local clone of `altinn-design-system` instead.

If using `npm link` or `yarn link` works for your project, that'll be the easiest solution. Most likely however, you'll probably want to create local packages for `altinn-design-system` and refer to those in your project `package.json`:

First, in your local `altinn-design-system`:

1. Run `yarn --immutable`, if you haven't already
2. Run `yarn build`
3. Run `yarn pack`

Then, in your project:

1. Update the version number for `@altinn/altinn-design-system` to instead point to a path for the `package.tgz` file generated in the steps above. For example: `"@altinn/altinn-design-system": "../altinn-design-system/package.tgz",`
2. Run `yarn install` (or `npm install`, depending on your project)
3. Build and/or run your project

Tip: Whenever you re-build and re-pack in `altinn-design-system`, the output filename stays the same (`package.tgz`). This might cause caching issues where your project uses an older `package.tgz`. To force using a newer package, rename it to something else after running `yarn pack` (for example `package2.tgz`). Be sure to run your package manager after every time you pack the design system library.

## Getting started

### Node and Corepack

We are using the latest LTS release of node, but minimum version 16.9.0, since we are using [corepack](https://nodejs.org/api/corepack.html). To enable corepack, execute `corepack enable` from the terminal.

### Start Storybook

Execute `yarn start` to start Storybook. It should open a browser automatically when it is ready. If you prefer to not automatically open a browser, you can execute `yarn start --no-open`.

### Tests

- `yarn test` to run unit tests
- `yarn lint` to run lint checks

Lint checks and auto-fixes will be run automatically on commit.

### Adding new components

New components can be added by executing `yarn add-component <ComponentName>`. The name of the component should be written using PascalCase. This will generate all important files for you in the correct location, and also update the index file for exporting the component. The generated code includes some `TODO` statements that you should fix.

#### Adding new dependencies

When adding new dependencies, you should also add that dependency to the `external` array in `rollup.config.mjs`. This is done to avoid having the dependency being part of the bundle.

### Styling

Styling should primarily be done in css files using css variables. The css files should end with `.module.css`, so unique classnames will be generated. This ensures we will not run into naming collision issues with classnames.

We are using Figma as our design tool, and we are extracting tokens directly from Figma that can be used in code. These tokens are defined in the [figma-design-tokens repository](https://github.com/Altinn/figma-design-tokens). New components should ideally be using design tokens from there to define their layout. Before work is started on the component, you should discuss with the UX group first, because they need to define the tokens for the components.

#### Classname naming conventions

Using [BEM naming convention](http://getbem.com/naming/) gives a pretty clear view of what parts are the "root" and what parts are the "children", and is preferred. This also helps you think about when a component grows too big, and should be split into smaller isolated parts.

## Good to know

### How are the Figma design tokens connected to this repo?

The design tokens live in a [separate repository](https://github.com/Altinn/figma-design-tokens), which is used in Figma with a plugin. The UX group will set/use these tokens in their design, and in the end it will be synced to the `tokens.json` in the `figma-design-tokens` repository. These tokens are publised to NPM as a package `@altinn/figma-design-tokens`. During this process, the `tokens.json` is transformed to `tokens.esm.js` and `tokens.css` files, so the values can be used directly from JS or as CSS variables.

![figma tokens usage diagam](./docs/figma-tokens-diagram.svg)

When using these tokens in this project, we are also transforming the values a bit, to stay compatible with our old design system. The long term goal is to get rid of the dependency to the old design system, so we no longer have to do this transformation. For more information about this, see the below explaination `rem` values.

## Code style

We use [eslint](https://eslint.org/) and [prettier](https://prettier.io/), and automatically set up git hooks to enforce
these on commits. To avoid confusion, it is recommended to set this up your IDE.

### Visual Studio Code

Install the [eslint extension from the marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

### WebStorm and IntelliJ IDEA

Configure your IDE to run `eslint --fix` on save (prettier will also reformat your code when doing this). It is also recommended to
[set up Prettier as the default formatter](https://www.jetbrains.com/help/webstorm/prettier.html#ws_prettier_default_formatter).

## Creating a new release

Go to Github Actions, and select the Release pipeline. Run the workflow, and select the appropriate version (major, minor or patch). We use [semver](https://semver.org/) spec.

### Release notes

Currently release notes is semi-automatic. After the release is done, go to the releases page, and edit the release that was just created. Click the "Generate release notes" button to get release notes, and update the release.
