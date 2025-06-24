import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import nextPlugin from "eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import typescriptParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  js.configs.recommended,
  ...compat.extends("next/core-web-vitals"),
  {
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": {
        rules: {
          "@typescript-eslint/no-unused-vars": "warn"
        }
      }
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        project: "./tsconfig.json"
      }
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      "next/no-img-element": "off"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];