import React from 'react';
import LoginNavBar from '../../UI/Nav/PreLoginNav/LoginNavBar';
import PostLoginNav from '../../UI/Nav/PostLoginNav/PostLoginNav';
import HomePageBody from './HomePageBody';

export default function HomePage() {
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
