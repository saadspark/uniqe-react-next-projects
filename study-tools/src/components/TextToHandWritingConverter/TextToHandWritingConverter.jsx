import React, { useState } from "react";
import image from "./images/blank.jpg";
const fontOptions = [
  { name: "'Courier New', monospace" },
  { name: "'Schoolbell', arial, serif" },
  { name: "'Dancing Script', cursive" },
  { name: "'Pacifico', cursive" },
  { name: "'Handlee', cursive" },
  { name: "'Patrick Hand', cursive" },
  { name: "'Shadows Into Light', cursive" },
  { name: "'Amatic SC', cursive" },
  { name: "'Indie Flower', cursive" },
  { name: "'Caveat', cursive" },
];

const fontColors = [
  { color: "red" },
  { color: "blue" },
  { color: "black" },
  { color: "green" },
];

export default function MyComponent() {
  const [selectedFont, setSelectedFont] = useState("'Handlee', cursive");
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState("18px");
  const [fontColor, setFontColor] = useState("#5C5C5C");

  const handleChange = (event) => {
    setSelectedFont(event.target.value);
  };

  const handleChangeText = (value) => {
    setText(value);
  };

  const HandleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const HandleFontColorChange = (event) => {
    setFontColor(event.target.value);
  };
  const textareaStyle = {
    width: "100%",
    height: "900px",
    resize: "vertical",
    padding: "8px",
    boxSizing: "border-box",
    fontSize: fontSize,
    fontFamily: selectedFont,
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: fontColor,
    marginTop: "12px", // Corrected property name and removed semicolon
  };

  return (
    <label htmlFor="paragraphInput">
      Choose Font:
      <select value={selectedFont} onChange={handleChange}>
        {fontOptions.map((fontOption) => (
          <option key={fontOption.name} value={fontOption.name}>
            {fontOption.name}
          </option>
        ))}
      </select>
      <select name="" id="" onChange={HandleFontSizeChange}>
        <option value="6px">6 px</option>
        <option value="10px">10 px</option>
        <option value="12px">12 px</option>
        <option value="14px">14 px</option>
        <option value="18px">18 px</option>
        <option value="24px">24 px</option>
      </select>
      <select onChange={HandleFontColorChange}>
        {fontColors.map((fontcolor) => (
          <option key={fontcolor.color} value={fontcolor.color}>
            {fontcolor.color}
          </option>
        ))}
      </select>
      <textarea
        id="paragraphInput"
        name="paragraphInput"
        rows="4"
        cols="50"
        onKeyDown={(e) => handleChangeText(e.target.value)}
      ></textarea>
      <br />
      Enter Paragraph:
      <textarea
        id="paragraphInput"
        name="paragraphInput"
        rows="4"
        cols="50"
        style={textareaStyle}
        value={text}
      ></textarea>
    </label>
  );
}
