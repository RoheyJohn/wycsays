import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
// import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from './Search';

export default function Home() {
  return (
    <div className="home">
      <h1>This is the home page!</h1>
      {/*Home Header*/}
      <div className="home__header">
        <div className="home__headerLeft">
          {/*About Link*/}
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="home__headerRight">
          {/*Avatar*/}
          <Link to="/about">Favourites</Link>
          <Avatar />
        </div>
      </div>

      {/*Home Body*/}
      <div className="home__body">
        <img src="https://www.canva.com/design/DAEfCWL3cMs/Ii3Je_0zQaPtlPJQ1venpA/view?utm_content=DAEfCWL3cMs&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu" alt="logo"/>

        <div className="home__inputContainer">
          {/* <Search /> */}
          <Search />
        </div>
      </div>
    </div>
  );
}
