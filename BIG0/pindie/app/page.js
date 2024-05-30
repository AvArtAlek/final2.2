import Image from "next/image";
import styles from "./page.module.css";

import { Banner } from "./componets/Banner/Banner";
import { Promo } from "./componets/Promo/Promo";
import { getGamesByCategory } from "./data/data-utils";
import ErrorButton from "./componets/error418/error418";
import { CardsListSection } from "./componets/CardListSection/CardListSection/CardListSection";


export default function Home() {
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");
  return (
    <main className="main">
      <Banner/>
      <CardsListSection
       id="new" 
       title="Новинки" 
       data={newGames}
       type="slider"/>
      <CardsListSection
      id="popular" 
      title="Популярные" 
      data={popularGames}
      type="slider"/>
      <Promo/>
      <ErrorButton/>
    </main>
  );
}
