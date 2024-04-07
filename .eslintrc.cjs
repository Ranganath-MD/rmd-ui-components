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
	],
	ignorePatterns: [
		"dist",
		".eslintrc.cjs",
		"tailwind.config.js",
		"vite.config.ts",
		"prettier.config.cjs",
		"setupTest.ts",
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
		"prettier/prettier": "error",
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"react/react-in-jsx-scope": "off",
		"no-console": "error",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};