
let bookTitle = 'Atomic Habits'
let bookAuthor = 'James Clear'
let bookPages = 306

//essas variáveis pertecem a uma coisa só, então podemos agrupar elas dentro de um objeto
//um objeto é uma variável, podemos começar com let ou const

const book = {
    bookTitle: 'Atomic Habits',
    bookAuthor: 'James Clear',
    bookPages: 306,
}

//para a variável saber que são propriedades e valores, precisa trocar o (=) por (:) e colocar a vírgula (,)
//no final de cada um

//também podemos montar um objeto dentro de outro objeto. Ex:

const book = {
    bookTitle: 'Atomic Habits',
    bookAuthor: 'James Clear',
    bookPages: 306,
    bookChapters: {
        chap1: 'EX',
        chap2: 'EX2'
    }
}

console.log(book)