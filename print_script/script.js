const createParagraph = (e, color) => `<p style='color: ${color}'>${e}</p>`

const vector = (arr) => {
    return arr.map((el, i) => {
        if (i === 0) { return createParagraph(el, 'purple') }

        if (i === 1) { return createParagraph(el, 'blue') }

        if (i >= 2) {
            switch (Math.floor(Math.random() * 3)) {
                case 0:
                    return createParagraph(el, 'red')

                case 1:
                    return createParagraph(el, 'yellow')

                case 2:
                    return createParagraph(el, 'green')

                default:
                    break
            }
        }
    })
}

const arrayN = Array.from({ length: 100 }, (e, i) => i)

const nonPure = (n) => {
    console.time('time')
    document.getElementById('cards_container').innerHTML = vector(arrayN).join('')
    console.timeEnd('time')
    return n < 9 ? cosasImpuras(++n) : 0
}

nonPure(0)