
import Hero from "@components/Hero/Hero";

export const metadata = {
  title:
    "Сергій Скляренко – кармолог, психотерапевт, автор практик та медитацій",
  description:
    "Я створив для вас простір енергетичної сили, де ви зможете знайти дієві інструменти та отримати підтримку на шляху до особистої гармонії",
};

export default function Home() {
  return (
    <main className="main">
      <Hero />
    </main>
  );
}
