import React from "react";
import './Search.css';
import SearchIcon from "@material-ui/icons/search";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Search({ hideButtons = false }) {

  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    console.log('you hide the search button', input)

    history.push('/search')
  }
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
        <Button type="submit" onClick={search} variants="outlined">Constitution Search</Button>
        <Button variants="outlined">Favorites</Button>
      </div>
      ) : (
        <div className="search__buttons">
        <Button className="search__buttonsHidden" type="submit" onClick={search} variants="outlined">Constitution Search</Button>
        <Button className="search__buttonsHidden" variants="outlined">Favorites</Button>
      </div>
      )}
      
      
    </form>
  );
}

