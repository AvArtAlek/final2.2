  "use client"
  // Компонент New в файле app/new/page.js
  import { endpoints } from "@/app/api/config";
  import { useGetDataByCategory } from "@/app/api/api-hooks";
  import { CardsListSection } from "@/app/componets/CardListSection/CardListSection/CardListSection"; 
  import { Preloader } from "@/app/componets/Preloader/Preloader";

export default function Pixel() {
  const pixelGames = useGetDataByCategory(endpoints.games, "pixel");
  return (
    <main className="main-inner">
        {/* Используем CardsListSection вместо CardsList */}
      {pixelGames ? <CardsListSection id="pixel" title="Пиксельные" data={pixelGames} /> : <Preloader />}
    </main>
  );
}