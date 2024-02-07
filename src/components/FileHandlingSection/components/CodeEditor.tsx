import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";

import { useState } from "react";

import "./Handlers/prism.css";

export default function CodeEditor() {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  return (
    <Editor
      className="font-['Fira_code','Fira_Mono',monospace] h-[411px] text-sm text-foreground bg-background"
      value={code}
      onValueChange={(code) => setCode(code)}
      //The code in this editor isn't javascript, but I set it to javascript
      //to make the prismjs hightlight puts beautiful colors in it. :))
      highlight={(code) => highlight(code, languages.javascript, "javascript")}
      padding={14}
    />
  );
}
