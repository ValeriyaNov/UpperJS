const reviewSymbol = Symbol("review");
const ratingSymbol = Symbol("rating");
const tagsSymbol = Symbol("tags");


// Функция для добавления метаданных к объектам
function addMetadata(book, metadataType, data) {
    book[metadataType] = data;
}


// Функция для извлечения метаданных из объекта
function getMetadata(book, metadataType) {
    return book[metadataType];
}