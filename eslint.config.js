import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { js, react: pluginReact },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // Habilitar JSX
        },
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Desactiva la regla que requiere React en el scope
    },
    extends: ["js/recommended", "plugin:react/recommended"],
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);