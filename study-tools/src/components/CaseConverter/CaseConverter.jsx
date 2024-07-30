import React, { useState, useRef } from "react";

export default function CaseConverter() {
  const [paragraph, setParagraph] = useState("");
  const textareaRef = useRef(null);

  function handleChange(value) {
    setParagraph(value);
  }

  function Reset() {
    setParagraph("");
  }

  function Copy() {
    if (textareaRef.current) {
      textareaRef.current.select();
      document.execCommand("copy");
    }
  }
  const style = {
    width: "100%",
    height: "100px",
    resize: "vertical",
    padding: "8px",
    boxSizing: "border-box",
    fontSize: "16px",
  };
  return (
    <section>
      <h1>Enter Paragraph:</h1>
      <textarea
        style={style}
        id="paragraphInput"
        name="paragraphInput"
        value={paragraph}
        onChange={(e) => handleChange(e.target.value)}
        ref={textareaRef}
      ></textarea>
      <br />
      <button onClick={() => handleUpperCase(paragraph, setParagraph)}>
        UPPER CASE
      </button>
      <button onClick={() => handleLowerCase(paragraph, setParagraph)}>
        LOWER CASE
      </button>
      <button onClick={() => handleSentenceCase(paragraph, setParagraph)}>
        Sentence Case
      </button>
      <button onClick={() => handleMixedEvenCase(paragraph, setParagraph)}>
        MiXed CaSe
      </button>
      <button onClick={() => handleMixedOddCase(paragraph, setParagraph)}>
        iNvEeRsE cAsE
      </button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Copy}>Copy</button>
    </section>
  );
}

function handleUpperCase(paragraph, setParagraph) {
  setParagraph(paragraph.toUpperCase());
}

function handleLowerCase(paragraph, setParagraph) {
  setParagraph(paragraph.toLowerCase());
}

function handleSentenceCase(paragraph, setParagraph) {
  const para = paragraph.charAt(0).toUpperCase();
  setParagraph(para + paragraph.slice(1));
}

function handleMixedEvenCase(paragraph, setParagraph) {
  let para = "";
  for (var i = 0; i < paragraph.length; i++) {
    if (i % 2 === 0) para += paragraph.charAt(i).toLowerCase();
    else para += paragraph.charAt(i);
  }
  setParagraph(para);
}

function handleMixedOddCase(paragraph, setParagraph) {
  let para = "";
  for (var i = 0; i < paragraph.length; i++) {
    if (i % 2 === 0) para += paragraph.charAt(i).toUpperCase();
    else para += paragraph.charAt(i);
  }
  setParagraph(para);
}


