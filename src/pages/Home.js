import React from "react";
import cardList from "mocks/cardList";
import PriceCard from "components/PriceCard";
import PricingHeader from "components/PricingHeader";

export default function Home(props) {
  return (
    <div>
      <PricingHeader />
      <PriceCard prices={cardList} />
    </div>
  );
}
