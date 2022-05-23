# altinn-design-system

Design system v2

## Getting started

### Node and Corepack

We are using the latest LTS release of node, but minimum version 16.9.0, since we are using [corepack](https://nodejs.org/api/corepack.html). To enable corepack, execute `corepack enable` from the terminal.

### Setup Github PAT Token

We are currently using Github registry to publish packages. This means you need to setup a PAT (Personal Access Token) on your machine.

- Acquire a [GitHub PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). The only permission you need to grant is read:packages.
- Assign the PAT to the GITHUB_PACKAGES_PAT environment variable:
  - Mac/Linux: add the line `export GITHUB_PACKAGES_PAT=<PAT>` to `~/.bash_profile` and restart the terminal
  - Windows: Execute `setx GITHUB_PACKAGES_PAT <PAT> /m` and restart the terminal

### Start Storybook

Execute `yarn start` to start Storybook. It should open a browser automatically when it is ready. If you prefer to not automatically open a browser, you can execute `yarn start --no-open`.

### Tests

- `yarn test` to run unit tests
- `yarn lint` to run lint checks

Lint checks and auto-fixes will be run automatically on commit.

### Adding new components

New components can be added by executing `yarn add-component <ComponentName>`. The name of the component should be written using PascalCase. This will generate all important files for you in the correct location, and also update the index file for exporting the component. The generated code includes some `TODO` statements that you should fix.

### Styling

Styling should primarily be done in css files using css variables. The css files should end with `.module.css`, so unique classnames will be generated. This ensures we will not run into naming collision issues with classnames.

We are using Figma as our design tool, and we are extracting tokens directly from Figma that can be used in code. These tokens are defined in the [figma-design-tokens repository](https://github.com/Altinn/figma-design-tokens). New components should ideally be using design tokens from there to define their layout. Before work is started on the component, you should discuss with the UX group first, because they need to define the tokens for the components.

#### Classname naming conventions

Using [BEM naming convention](http://getbem.com/naming/) gives a pretty clear view of what parts are the "root" and what parts are the "children", and is preferred. This also helps you think about when a component grows too big, and should be split into smaller isolated parts.

## Code style

We use [eslint](https://eslint.org/) and [prettier](https://prettier.io/), and automatically set up git hooks to enforce
these on commits. To avoid confusion, it is recommended to set this up your IDE.

### Visual Studio Code

Install the [eslint extension from the marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

### WebStorm and IntelliJ IDEA

Configure your IDE to run `eslint --fix` on save (prettier will also reformat your code when doing this). It is also recommended to
[set up Prettier as the default formatter](https://www.jetbrains.com/help/webstorm/prettier.html#ws_prettier_default_formatter).
