module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "tailwind.config.js",
    "vite.config.ts",
    "prettier.config.cjs",
    "src/setupTests.ts",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  overrides: [
    {
      files: ["postcss.config.js"],
      parserOptions: {
        project: null,
      },
    },
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-console": "error",
    "react/jsx-sort-props": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "max-len": [
      "error",
      {
        code: 150,
      },
    ],
    "padding-line-between-statements": [
      // ? https://eslint.org/docs/latest/rules/padding-line-between-statements
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
      {
        blankLine: "always",
        prev: ["const", "let", "function"],
        next: "*",
      },
      {
        blankLine: "always",
        prev: ["*"],
        next: ["if", "switch", "while", "try", "function"],
      },
      {
        blankLine: "always",
        prev: ["if", "switch", "while", "try", "function"],
        next: ["*"],
      },
      {
        blankLine: "always",
        prev: ["export"],
        next: ["*"],
      },
    ],
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "react/require-default-props": ["off"],
    "no-else-return": "error",
    "max-len": ["off"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
