  "use client"
  // Компонент New в файле app/new/page.js
  import { endpoints } from "@/app/api/config";
  import { useGetDataByCategory } from "@/app/api/api-hooks";
  import { CardsListSection } from "@/app/componets/CardListSection/CardListSection/CardListSection"; 
  import { Preloader } from "@/app/componets/Preloader/Preloader";
export default function Popular() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  return (
    <main className="main-inner">
        {/* Используем CardsListSection вместо CardsList */}
      {popularGames ? <CardsListSection id="popular" title="Популярные" data={popularGames} /> : <Preloader />}
    </main>
  );
}