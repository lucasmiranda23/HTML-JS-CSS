const book = {
    bookTitle: 'Atomic Habits',
    bookAuthor: 'James Clear',
    bookPages: 306,
    bookChapters: {
        chap1: 'Fundamentals',
        chap2: '1st law',
    },
    printBook: function(){
        console.log('Printing...')
    }
}

book.printBook()


//também podemos colocar uma função dentro do objeto, para simplificar e organizar
//melhor o nosso código conforme mostra o exemplo acima.

