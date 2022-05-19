# altinn-design-system

Design system v2

## Adding components

New components can be added by executing `yarn add-component <ComponentName>`. The name of the component should be written using PascalCase. This will generate all important files for you in the correct location, and also update the index file for exporting the component. The generated code includes some `TODO` statements that you should fix.

## Code style

We use [eslint](https://eslint.org/) and [prettier](https://prettier.io/), and automatically set up git hooks to enforce
these on commits. To avoid confusion, it is recommended to set this up your IDE.

### Visual Studio Code

Install the [eslint extension from the marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

### WebStorm and IntelliJ IDEA

Configure your IDE to run `eslint --fix` on save (prettier will also reformat your code when doing this). It is also recommended to
[set up Prettier as the default formatter](https://www.jetbrains.com/help/webstorm/prettier.html#ws_prettier_default_formatter).
