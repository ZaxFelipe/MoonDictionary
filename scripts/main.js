function TraduzirUS(Word, Language) {
    window.open(`https://dictionary.cambridge.org/dictionary/english/${Word}`)
}



function TraduzirJP(Word, Language) {
    window.open(`https://jisho.org/search/${Word}`)
    window.open(`https://jisho.org/search/${Word}`)
}




function Traduzir() {
    let Word = document.querySelector(".c-form__input").value;
    let Language = document.querySelector("#language-form").value;
    switch (Language) {
        case 'US':
            TraduzirUS(Word, Language)
            break;
        case 'FR':
            document.createEvent(alert("Ainda Não Suportamos Frances :("))
            break
        case 'JP':
            TraduzirJP(Word, Language)
            break

        default:
            break;
    }
    // TraduzirJP(text);

}