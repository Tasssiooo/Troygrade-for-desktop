import Editor from "@monaco-editor/react";

export default function Code() {
  return (
    <main className="bg-[#1e1e1e] w-screen h-screen flex items-end">
      <div className="h-[calc(100vh-32px)]">
        <Editor
          width="100vw"
          height="100%"
          theme="vs-dark"
          defaultLanguage="ini"
          defaultValue="// some comment"
        />
      </div>
    </main>
  );
}
