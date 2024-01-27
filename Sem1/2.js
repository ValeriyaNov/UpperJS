const books = [
    { title: "1984", author: "George Orwell" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" }
];
const library = {
    books: [...books],
    [Symbol.iterator]: function() {
        let countBooks = 0;
        return {
            next: (() => {
                if (countBooks >= this.books.length) {
                    return { done: true }
                } else {
                    return {
                        value: this.books[countBooks++],
                        done: false
                    }
                }
            })
        }
    },
}
for (const book of library) {
    console.log(book.author, book.title)
}