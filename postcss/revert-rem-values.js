/**
 * A PostCSS plugin to recalculate all `rem` values to work with a different
 * ratio than the default `1rem` = `16px`.
 */

const remRegEx = /(\d*\.?\d+)rem(?=\W|$)/gim;
const processed = Symbol('processed');
const REM_RATIO = 1.6;

module.exports = () => {
  return {
    postcssPlugin: 'revert-rem-values',
    // Rule(rule) {
    //   if (rule[processed]) {
    //     return;
    //   }

    //   if (rule.selectors.includes('html')) {
    //     rule.walkDecls('font-size', (decl) => {
    //       decl.remove();
    //     });
    //   }

    //   rule[processed] = true;
    // },
    Declaration(decl) {
      if (decl[processed]) {
        return;
      }

      const willMatch = remRegEx.test(decl.value);

      decl.value = decl.value.replace(remRegEx, (_match, numericValue) => {
        const patchedValue =
          Math.round((numericValue * REM_RATIO + Number.EPSILON) * 100) / 100;
        console.log('MATCHED', decl.value);
        return `${patchedValue}rem`;
      });

      if (willMatch) console.log('  -->', decl.value);

      decl[processed] = true;
    },
  };
};

module.exports.postcss = true;
