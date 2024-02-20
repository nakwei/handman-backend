// Inspired by https://www.swkeever.com/tailwind-class-function

// using this combined with these vscode settings
// "editor.quickSuggestions": {
//   "strings": true
// },
// "tailwindCSS.experimental.classRegex": [["cx\\(([^)]*)\\)", "\"([^\"]*)\""]],
// allows for vscode tailwind autocompletion
export const cx = (...variables: (string | undefined | null | false)[]) =>
  variables.filter(Boolean).join(" ");
