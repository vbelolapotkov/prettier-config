module.exports = {
  printWidth: 80,
  semi: false,
  singleQuote: true,
  trailingComma: "es5",
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  overrides: [
    {
      files: "package*.json",
      options: {
        printWidth: 1000
      }
    }
  ]
};
