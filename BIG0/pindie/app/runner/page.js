  "use client"
  // Компонент New в файле app/new/page.js
  import { endpoints } from "@/app/api/config";
  import { useGetDataByCategory } from "@/app/api/api-hooks";
  import { CardsListSection } from "@/app/componets/CardListSection/CardListSection/CardListSection"; 
  import { Preloader } from "@/app/componets/Preloader/Preloader";
export default function Runner() {
  const newGames = useGetDataByCategory(endpoints.games, "runner");
  return (
    <main className="main-inner">
        {/* Используем CardsListSection вместо CardsList */}
      {newGames ? <CardsListSection id="runner" title="Раннеры" data={newGames} /> : <Preloader />}
    </main>
  );
}