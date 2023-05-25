import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ua from "@public/locales/ua/translation";
import ru from "@public/locales/ru/translation";

i18n.use(initReactI18next).use(LanguageDetector).init({
  lng: "ua",
  fallbackLng: "ua",
  resources: {
    ua,
    ru,
  },
  // Додайте ресурси перекладу для інших мов
});

// export default i18n;
