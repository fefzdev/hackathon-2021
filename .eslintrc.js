module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/prettier",
  ],
  plugins: ["import"],
  parserOptions: {
    parser: "babel-eslint",
  },
  overrides: [],
  globals: {
    chrome: "readonly",
  },
  rules: {
    "no-sequences": "off",
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "vue/require-v-for-key": "off",
    "vue/no-v-html": "off",
    "no-debugger": process.env.NODE_ENV === "development" ? "off" : "warn",
    "prettier/prettier": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: ["external", "builtin", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "@/**",
            group: "builtin",
          },
        ],
      },
    ],
  },
};
