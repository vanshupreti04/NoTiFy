import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./translations"; // Import translation JSON

i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
