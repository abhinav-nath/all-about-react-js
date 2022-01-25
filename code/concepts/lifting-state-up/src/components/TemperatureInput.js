import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

export default function TemperatureInput(props) {
  const temperature = props.temperature;
  const scale = props.scale;
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        value={temperature}
        onChange={(e) => props.onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
}
