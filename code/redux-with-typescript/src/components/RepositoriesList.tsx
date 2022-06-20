import React, { useState } from "react";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // do not refresh the whole page when form is submitted
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
