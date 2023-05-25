const navLing = JSON.stringify([
  { name: "Головна", href: "/" },
  {
    name: "послуги",
    href: "services",
  },
  {
    name: "навчання",
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
    name: "калькулятор",
    href: "calculator",
  },
]);

const ua = {
  translation: {
    name: "Welcome!",
    introText: "This is the introduction text.",
    formattedText: "Hello <strong>{{name}}</strong>, welcome to my app!",
    navList: navLing,
  },
};

export default ua;
