import React from "react";
import './search.css';
import SearchIcon from "@material-ui/icons/search";

export default function Search() {
  return (
    
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input />
      </div>
      
      <div className="search__buttons">
      
      </div>
    </div>
  );
}