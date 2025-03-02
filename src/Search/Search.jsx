import React, { useState } from "react";
import styles from './Search.module.css'

const Search = ({searching,setSearching,inputVal , setInputVal}) => {
  // let inputRef = useRef(null);
 

  const handleSearch = () => {
   console.log(inputVal)
  //  setInputVal(inputRef)
   setSearching(true);
   setInputVal("")
  };

  return (
    <div>
      <input
      
        className={styles.input}
        type="text"
        placeholder={"Search image"}
      />
      <button onClick={handleSearch} className={styles.btn}>
        Search
      </button>
      
    </div>
  );
};

export default Search;
