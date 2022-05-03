function TraduzirJP(Word, Language) {
    window.open(`https://jisho.org/search/${Word}`)
    // window.open(`https://ejje.weblio.jp/content/${value}`)
}




function Traduzir() {
    let Palavra = document.querySelector(".c-form__input").value;
    let Idioma = document.querySelector("#language-form").value;
    switch (Idioma) {
        case 'US':
            document.createEvent(alert("Ainda Não Suportamos Ingles :("))
            break;
        case 'FR':
            document.createEvent(alert("Ainda Não Suportamos Frances :("))
            break
        case 'JP':
            document.createEvent(alert("Ainda Não Suportamos Japones :("))
            break

        default:
            break;
    }
    // TraduzirJP(text);

}