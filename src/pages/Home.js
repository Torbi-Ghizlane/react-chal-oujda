import React from 'react'
import cardList from "mocks/cardList"
import PriceCard from "components/PriceCard"
import AppHeader from "components/AppHeader"

export default function Home(props) {
  return <div>
    <AppHeader />
    <PriceCard prices={cardList}/>

  </div>
}