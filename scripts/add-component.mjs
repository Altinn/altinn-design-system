import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const resolvePath = (...args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  return path.join(__dirname, '..', ...args);
};

const ensureFirstLetterIsUpperCase = (str) =>
  str[0].toUpperCase() + str.slice(1);

const init = async () => {
  const componentName = parseArgs();

  await bootstrapComponent({
    componentName: ensureFirstLetterIsUpperCase(componentName),
  });
};

const generateFiles = async ({ componentName, src, dest }) => {
  const replace = /_COMPONENT_/g;
  const replaceWith = componentName;

  const filesToCopy = await fs.readdir(src);

  for (const file of filesToCopy) {
    const templateFile = (await fs.readFile(path.join(src, file))).toString();
    const result = templateFile.replace(replace, replaceWith);

    await fs.writeFile(
      path.join(dest, file.replace(replace, replaceWith)),
      result,
    );
  }
};

const updateIndex = async ({ componentName }) => {
  const indexFile = resolvePath('/src/components/index.ts');

  const entry = `export { ${componentName} } from './${componentName}';\n`;

  await fs.appendFile(indexFile, entry);
};

const bootstrapComponent = async ({ componentName }) => {
  const src = resolvePath('/scripts/templates/Component');
  const dest = resolvePath(`/src/components/${componentName}`);

  try {
    await fs.access(dest);
    console.log(`Component "${componentName}" already exists.`);
    process.exit(-1);
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.mkdir(dest);
      await generateFiles({ componentName, src, dest });
      await updateIndex({ componentName });
      console.log(`Component "${componentName}" created.`);
    } else {
      console.log(error);
      process.exit(-1);
    }
  }
};

const parseArgs = () => {
  const { _: commands } = yargs(hideBin(process.argv))
    .wrap(null)
    .usage(
      `yarn add-component <name>

Create a new component with the given <name>. The name should use PascalCase.
`,
    )
    .demandCommand(1, 1).argv;

  return commands[0];
};

init();
