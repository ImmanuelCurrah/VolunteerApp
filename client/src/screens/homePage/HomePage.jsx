import React from 'react';
import LoginNavBar from '../../UI/Nav/PreLoginNav/LoginNavBar';
import PostLoginNav from '../../UI/Nav/PostLoginNav/PostLoginNav';
import HomePageBody from './HomePageBody';

export default function HomePage() {
  // check local storage for token that will be stored to see if there is a current login - return post login nav if there is a token and login nav if not
  //     if (loggedin) {
  //       return <PostLoginNav />;
  //   <HomePageBody />
  //     } else {
  return (
    <div>
      <LoginNavBar />
      <HomePageBody />
    </div>
  );
  //   }
}
