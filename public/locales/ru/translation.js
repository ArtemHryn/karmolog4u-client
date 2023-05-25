const navList = JSON.stringify([
  { name: "Главная", href: "/" },
  {
    name: "Услуги",
    href: "services",
  },
  {
    name: "Обучение",
    href: "education",
  },
  {
    name: "Магазин",
    href: "shop",
  },
  {
    name: "Блог",
    href: "blog",
  },
  {
    name: "Калькулятор",
    href: "calculator",
  },
]);

const ru = {
  translation: {
    name: "Bienvenue !",
    introText: "Voici le texte d'introduction.",
    formattedText:
      "Bonjour <strong>{{name}}</strong>, bienvenue dans mon application !",
    navList: navList,
  },
};

export default ru;
