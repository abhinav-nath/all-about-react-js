import React, { useState, useEffect } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  // need to run it only once when we render our component
  // because we just want to add an event listener one time
  useEffect(() => {
    document.body.addEventListener(
      "click",
      () => {
        setOpen(false);
      },
      { capture: true }
    );
  }, []); // send empty array as second arg to run it only once when the component is rendered

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null; // null in React means - Don't render anything!
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon" />
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
