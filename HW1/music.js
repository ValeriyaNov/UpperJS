// Задание 1• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать.Каждая итерация должна возвращать следующий альбом из коллекции.

// •Создайте объект musicCollection, который содержит массив альбомов и имеет свойство - символ Symbol.iterator.Каждый альбом имеет следующую структуру:

//     {
//         title: "Название альбома",
//         artist: "Исполнитель",
//         year: "Год выпуска"
//     }

// •
// Реализуйте кастомный итератор для объекта musicCollection.Итератор должен перебирать альбомы по порядку.•Используйте цикл
// for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель(Год выпуска)
const albums = [
    { title: "The Record", artist: "Boygenius", year: "2023" }, { title: "The Division Bell", artist: "Pink Floyd", year: "1994" }, { title: "Graduation", artist: "Kanye West", year: "2007" }, { title: "Lover", artist: "Taylor swift", year: "2019" }
];
const musicCollection = {
    albums: [...albums],
    [Symbol.iterator]: function() {
        let count = 0;
        return {
            next: (() => {
                if (count >= this.albums.length) {
                    return { done: true }
                } else {
                    return {
                        value: this.albums[count++],
                        done: false
                    }
                }
            })
        }
    },
};
for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`)
};