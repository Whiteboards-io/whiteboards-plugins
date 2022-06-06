import React, { useEffect, useRef } from "react";
import _ from "underscore";
import JSONEditor from "jsoneditor";
import "jsoneditor/dist/jsoneditor.css";
import { useGetValue } from "./hooks";

export default function JsonEditor({ value, onChange }: { value: any; onChange?: (value: any) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const editorRef = useRef<JSONEditor | null>(null);
  const getValue = useGetValue(value);

  useEffect(() => {
    if (ref.current) {
      const editor = new JSONEditor(
        ref.current,
        {
          onChangeJSON: onChange
            ? (json) => {
                if (!_.isEqual(json, getValue())) {
                  onChange(json);
                }
              }
            : undefined,
          mode: onChange ? "tree" : "view",
        },
        value
      );
      editorRef.current = editor;
      return () => editor.destroy();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    editorRef.current?.update(value);
  }, [value]);

  return <div ref={ref} />;
}
