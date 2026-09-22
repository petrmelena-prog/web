// ============================================================
//  ZAVOLÁM TI — NASTAVENÍ WEBU
//  Jediný soubor, který upravujete. Hodnoty v uvozovkách, prázdné "" = zatím není.
//  Po změně soubor nahrajte do repozitáře web (Upload files přepíše).
// ============================================================
window.KONFIG = {

  // Formulář na zkušební hovor (Tally). ID je v adrese formuláře: tally.so/r/XXXXXX
  TALLY_FORM_ID: "dWyBoy",

  // Krátký formulář jen na e-mail — první krok dvoukrokového funnelu na reklama.html.
  // V Tally u něj nastavte Redirect on completion na https://zavolamti.cz/zkouska.html
 // Prázdné = reklama.html ukáže "Formulář se připravuje" a nedá se z ní přihlásit.
  TALLY_FORM_ID_MAIL: "GxMMyZ",
  // Druhý malý formulář pro cartoon variantu B. Liší se jen přesměrováním
  // (zkouska-b.html místo zkouska.html). Prázdné = reklama-b.html použije
  // TALLY_FORM_ID_MAIL a člověk skončí v áčkové zkoušce.
  TALLY_FORM_ID_MAIL_B: "GxMM7k",

  // Video na prodejní stránce — ID z adresy YouTube: youtube.com/watch?v=XXXXXXXXXXX
  VIDEO_YOUTUBE_ID: "R8Ftn5Bir6w",

  // true = video je natočené na výšku (mobilem). Přehrávač bude úzký a na výšku,
  // místo aby stál v černém pruhu přes celou šířku.
  VIDEO_NA_VYSKU: true,

  // Screenshoty pro sekci „Takhle to vypadá doopravdy" — názvy souborů nahraných
  // do složky obrazky/ v repozitáři web, ve stejném pořadí jako popisky na stránce.
  // Prázdné pole [] = sekce se na ostrém webu neukáže.
  SCREENSHOTY: [],

  // Platební odkazy ze Stripe (Payment Links). Prázdné = tlačítko řekne, že odkaz chybí.
  STRIPE: {
    "2x_mesic":   "",
    "2x_kvartal": "",
    "3x_mesic":   "",
    "3x_kvartal": "",
    "5x_mesic":   "",
    "5x_kvartal": "",
    "zakladni":   ""
  },

  // Platební odkazy pro jednotlivé kanály. Prázdné = použije se standardní odkaz ze STRIPE výš.
  // Klíč je stejný jako ve STRIPE. Slouží k tomu, aby lidé z partnerské skupiny nebo z reklamy
  // platili za jiných podmínek než ostatní.
  STRIPE_KANALY: {
    "samouci": {
      "5x_mesic":   "",
      "5x_kvartal": ""
    }
  },

  // Meta (Facebook) pixel — až při reklamě. Číslo z Events Manager. Prázdné = nic se nenačte.
  META_PIXEL_ID: "",

  // Domény, na kterých se web považuje za ostrý (skryjí se žluté pracovní pruhy a nevyplněné bloky).
  OSTRE_DOMENY: ["zavolamti.cz", "www.zavolamti.cz"]
};
