import Editor from "@monaco-editor/react";

export default function CodeEditor() {
  return (
    <Editor
      width="100%"
      height="413px"
      theme="vs-dark"
      defaultLanguage="ini"
      defaultValue="function add(a, b) { return a + b; }"
    />
  );
}
