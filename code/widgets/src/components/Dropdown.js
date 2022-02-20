import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // need to run it only once when we render our component
  // because we just want to add an event listener one time
  useEffect(() => {
    const onBodyClick = (event) => {
      //console.log("BODY CLICKED");

      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    // clean-up function (acts as a destructor)
    // also invoked when the component is removed from DOM
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true
      });
    };
  }, []); // send empty array as second arg to run it only once when the component is rendered

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null; // null in React means - Don't render anything!
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          //console.log("ITEM CLICKED");
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  //console.log(ref.current);

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() => {
            //console.log("DROPDOWN CLICKED");
            setOpen(!open);
          }}
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
