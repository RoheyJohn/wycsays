import React from "react";
import './Search.css';
import SearchIcon from "@material-ui/icons/search";

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
        <Buttons type="submit" onClick={search} variants="outlined">Constitution Search</Buttons>
        <Buttons variants="outlined">Favorites</Buttons>
      </div>
      ) : (
        <div className="search__buttons">
        <Buttons className="search__buttonsHidden" type="submit" onClick={search} variants="outlined">Constitution Search</Buttons>
        <Buttons className="search__buttonsHidden" variants="outlined">Favorites</Buttons>
      </div>
      )}
      
      
    </form>
  );
}

