import React from "react";
import border from "../../../assets/images/heimerdinger_circle_new.png";
import CodeEditorArea from "./CodeEditorArea";

const EditorSection = () => {
  return (
    <section className="relative z-30 flex flex-col justify-center items-center w-full box-border">
      <img
        src={border}
        width={600}
        height={400}
        alt=""
        className="absolute z-50"
      />
      <CodeEditorArea />
    </section>
  );
};

export default EditorSection;
