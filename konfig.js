// ============================================================
//  ZAVOLÁM TI — NASTAVENÍ WEBU
//  Jediný soubor, který upravujete. Hodnoty v uvozovkách, prázdné "" = zatím není.
//  Po změně soubor nahrajte do repozitáře web (Upload files přepíše).
// ============================================================
window.KONFIG = {

  // Formulář na zkušební hovor (Tally). ID je v adrese formuláře: tally.so/r/XXXXXX
  TALLY_FORM_ID: "dWyBoy",

  // Video na prodejní stránce — ID z adresy YouTube: youtube.com/watch?v=XXXXXXXXXXX
  VIDEO_YOUTUBE_ID: "",

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

  // Meta (Facebook) pixel — až při reklamě. Číslo z Events Manager. Prázdné = nic se nenačte.
  META_PIXEL_ID: "",

  // Domény, na kterých se web považuje za ostrý (skryjí se žluté pracovní pruhy a nevyplněné bloky).
  OSTRE_DOMENY: ["zavolamti.cz", "www.zavolamti.cz"]
};
