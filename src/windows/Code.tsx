import CodeToolbar from "@/components/WindowBar/components/CodeToolbar";
import Editor from "@monaco-editor/react";

export default function Code() {
  const text = localStorage.getItem("editor-code")!;

  return (
    <>
      <CodeToolbar />
      <main className="bg-[#1e1e1e] w-screen h-screen flex items-end">
        <div className="h-[calc(100vh-32px)]">
          <Editor
            width="100vw"
            height="100%"
            theme="vs-dark"
            defaultLanguage="ini"
            value={text}
          />
        </div>
      </main>
    </>
  );
}
