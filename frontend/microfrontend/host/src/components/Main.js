import React, { lazy, Suspense } from 'react';
// import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ Cards, UserProfile }) {
  const currentUser = React.useContext(CurrentUserContext);

  const imageStyle = { backgroundImage: `url(${currentUser.avatar})` };



  return (
    <main className="content">
        <Suspense fallback="loading�">
           <UserProfile></UserProfile>
        </Suspense>
        <Suspense fallback="loading�">
           <Cards></Cards>
        </Suspense>
    </main>
  );
}

export default Main;
