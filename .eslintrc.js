module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
      'eslint:recommended',
      'plugin:vue/essential'
    ],
    "parserOptions": {
      parser: "babel-eslint",
      sourceType: "module",
      ecmaVersion: 8
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};
