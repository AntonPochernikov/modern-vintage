module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  editorconfig: true,
  printWidth: 80,
  singleQuote: true,
  semi: false,
  importOrder: [
    '^react',
    '<THIRD_PARTY_MODULES>',
    '^#public',
    '^@(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
