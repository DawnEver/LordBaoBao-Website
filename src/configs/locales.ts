import enMessages from "@/locale/en";
import zhHansMessages from "@/locale/zhHans";

const locales = ["en", "zhHans"];
let locale = "zhHans";

// try {
//   const { 0: browserLang } = navigator.language.split("-");
//   if (locales.includes(browserLang)) locale = browserLang;
// } catch (e) {
//   console.log(e);
// }

// if (locale === "en"){
//   document.title = "Wuhan Voltworks S&T Ltd."
// }

export default {
  // current locale
  locale,
  

  // when translation is not available fallback to that locale
  fallbackLocale: "en",

  // availabled locales for user selection
  availableLocales: [
    {
      code: "zhHans",
      flag: "cn",
      name: "china",
      label: "中文",
      messages: zhHansMessages,
    },
    {
      code: "en",
      flag: "us",
      name: "united-states",
      label: "English",
      messages: enMessages,
    },
  ],
  messages: {
    en: enMessages,
    zhHans: zhHansMessages,
  },
};
