// Задание 1
// Представьте, что у вас есть класс для управления библиотекой.В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
// Класс должен содержать приватное свойство# books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
// Реализуйте геттер allBooks, который возвращает текущий список книг.
// Реализуйте метод addBook(title), который позволяет добавлять книгу в список.Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию.Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
// Реализуйте конструктор, который принимает начальный список книг(массив) в качестве аргумента.Убедитесь, что предоставленный массив не содержит дубликатов;
// в противном случае выбрасывайте ошибку.
const books = ['Мартин Иден', 'Хамелеон', 'Мцыри', 'Анна на шее','Хамелеон', 'Анна на шее'];
class Library {
    #allBooks=[];
    constructor(listBook){
    try {
    const findDuplicateBooks = listBook => listBook.filter((item, index)=> listBook.indexOf(item) !== index);
    const duplicate = findDuplicateBooks(listBook);
                   if (duplicate.length != 0) {
                  throw new Error(`В списке книг есть дубликаты - ${duplicate.join(', ')}`);
                                          }
                   this.#allBooks = [...listBook];


                      } catch (error) {
                   console.log(error.message);
                                      }}

get allBooks(){
    return this.#allBooks;
}
addBook(title){
try {
                if (this.#allBooks.includes(title)) {
                    throw new Error('Книга уже существует в списке');
                }
                this.#allBooks.push(title);

            } catch (error) {
                 console.log(error.message);
            }}

removeBook(title){
try {
                if (!this.#allBooks.includes(title)) {
                throw new Error('Такой книги нет в списке');
                                  }
              this.#allBooks.splice(this.#allBooks.indexOf(title),1);

               } catch (error) {
                   console.log(error.message);
 }}
 hasBook(title){
 return this.#allBooks.includes(title);
 }


}
const library1 = new Library(books);
library1.addBook('Убить пересмешника');
library1.addBook('Сероглазый король');
library1.removeBook('Мцыри');
console.log(library1.hasBook('Сероглазый'));
console.log(library1.allBooks);