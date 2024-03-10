module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  editorconfig: true,
  printWidth: 80,
  singleQuote: true,
  importOrder: ['<THIRD_PARTY_MODULES>', '^@(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
