import React, { useState } from "react";
import DATA from "../DATA.json";

function Search() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {DATA.filter((val) => {
        if (search === "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(search.toLowerCase())
        ) {
          return val;
        } else return false;
      }).map((val, key) => {
        return (
          <div className="user center" key={key}>
            <p>{val.first_name} </p>
          </div>
        );
      })}
    </div>
  );
}

export default Search;
