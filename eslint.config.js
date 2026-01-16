import js from "@eslint/js"
import globals from "globals"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import prettier from "eslint-plugin-prettier/recommended"
import promise from "eslint-plugin-promise"
import jsxA11y from "eslint-plugin-jsx-a11y"
import betterTailwindcss from "eslint-plugin-better-tailwindcss"
import { defineConfig, globalIgnores } from "eslint/config"

export default defineConfig([
  globalIgnores(["dist"]),
  prettier,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      react.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      promise,
      "jsx-a11y": jsxA11y,
      "better-tailwindcss": betterTailwindcss,
    },
    rules: {
      // React rules
      "react/react-in-jsx-scope": "off", // Not needed with React 17+ JSX transform
      // Promise rules
      "promise/always-return": "error",
      "promise/no-return-wrap": "error",
      "promise/param-names": "error",
      "promise/catch-or-return": "error",
      "promise/no-native": "off",
      "promise/no-nesting": "warn",
      "promise/no-promise-in-callback": "warn",
      "promise/no-callback-in-promise": "warn",
      "promise/avoid-new": "warn",
      "promise/no-new-statics": "error",
      "promise/no-return-in-finally": "warn",
      "promise/valid-params": "warn",
      "promise/no-multiple-resolved": "error",
      // JSX a11y rules
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/aria-activedescendant-has-tabindex": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/autocomplete-valid": "error",
      "jsx-a11y/click-events-have-key-events": "error",
      "jsx-a11y/control-has-associated-label": "error",
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/html-has-lang": "error",
      "jsx-a11y/img-redundant-alt": "error",
      "jsx-a11y/interactive-supports-focus": "error",
      "jsx-a11y/label-has-associated-control": "error",
      "jsx-a11y/label-has-for": "error",
      "jsx-a11y/media-has-caption": "error",
      "jsx-a11y/mouse-events-have-key-events": "error",
      "jsx-a11y/no-access-key": "error",
      "jsx-a11y/no-autofocus": "error",
      "jsx-a11y/no-distracting-elements": "error",
      "jsx-a11y/no-interactive-element-to-noninteractive-role": "error",
      "jsx-a11y/no-noninteractive-element-interactions": "error",
      "jsx-a11y/no-noninteractive-element-to-interactive-role": "error",
      "jsx-a11y/no-noninteractive-tabindex": "error",
      "jsx-a11y/no-onchange": "error",
      "jsx-a11y/no-redundant-roles": "error",
      "jsx-a11y/no-static-element-interactions": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",
      "jsx-a11y/scope": "error",
      "jsx-a11y/tabindex-no-positive": "error",
      // Better Tailwind CSS rules (simplified via recommended + overrides)
      ...betterTailwindcss.configs["recommended-warn"].rules,
      "better-tailwindcss/no-unknown-classes": "error",
      "better-tailwindcss/no-conflicting-classes": "error",
    },
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
  },
])
