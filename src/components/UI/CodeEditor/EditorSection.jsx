import React from "react";
import border from "../../../assets/images/code-editor.png";
import CodeEditorArea from "./CodeEditorArea";

const EditorSection = () => {
  return (
    <section className="relative z-30 flex flex-col justify-center items-center w-[816px] h-screen box-border">
      <img
        src={border}
        width={640}
        height={360}
        alt="border"
        className="absolute z-50 h-[450px]"
      />
      <CodeEditorArea />
    </section>
  );
};

export default EditorSection;
