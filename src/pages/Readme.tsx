import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import README from "../../README.md";

export default function Readme() {
  // const [readmeText, setReadmeText] = useState("");
  // useEffect(() => {
  //   fetch(README)
  //     .then((response) => response.text())
  //     .then((text) => {
  //       setReadmeText(text);
  //     });
  // }, []);
  return (
    <div className="Readme">
      <h1>Readme</h1>
      {/* {readmeText} */}
    </div>
  );
}
