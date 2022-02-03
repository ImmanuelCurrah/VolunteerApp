import React from 'react';
import LoginNavBar from '../../UI/Nav/PreLoginNav/LoginNavBar';
import PostLoginNav from '../../UI/Nav/PostLoginNav/PostLoginNav';
import HomePageBody from './HomePageBody';
import Footer from '../../UI/footer/Footer';

export default function HomePage() {
  // check local storage for token that will be stored to see if there is a current login - return post login nav if there is a token and login nav if not

  const token = localStorage.getItem('userToken');

  if (token) {
    return (
      <div>
        <PostLoginNav />;
        <HomePageBody />
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <LoginNavBar />
        <HomePageBody />
        <Footer />
      </div>
    );
  }
}
