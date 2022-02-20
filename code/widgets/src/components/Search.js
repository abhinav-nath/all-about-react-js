import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    const searchWiki = async () => {
      await axios.get("");
    };

    searchWiki();

    /* instead of assigning the function to a variable and then invoke it,
       we can directly invoke it like this:
    
      (async () => {
        await axios.get("");
      })();
    */
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
