import React from 'react';

import Header from '../../components/Header';
import Cities from "../../components/Cities";
import Tabs from "../../components/Tabs";
import { Offer } from '../../types/offer';


interface MainPageProps  {
  offersItems: Offer[];
  // rooms: Room[];
}

function MainPage(props: MainPageProps): JSX.Element {
  const {offersItems} = props;

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <Cities offersItems={offersItems}/>
      </main>
    </div>
  );
}

export default MainPage;
