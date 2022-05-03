function TraduzirUS(Word, Language) {
    var locs = [`https://dictionary.cambridge.org/dictionary/english/${Word}`, `https://youglish.com/pronounce/${Word}/english?`]

    for (let i = 0; i < locs.length; i++) {
        window.open(locs[i])
        // console.log(locs[i]);
    }
}



function TraduzirJP(Word, Language) {
    var locs = [`https://jisho.org/search/${Word}`,
        `https://youglish.com/pronounce/${Word}/japanese?`,
        `https://ejje.weblio.jp/content/${Word}`
    ]

    for (let i = 0; i < locs.length; i++) {
        window.open(locs[i])
        // console.log(locs[i]);
    }
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