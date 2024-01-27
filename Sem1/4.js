function Student(name) {
    this.name = name;
    this.lessons = new Set;
    this.addedLesson = function(lesson) {
        this.lessons.add(lesson)
    }
}

arrayPetrov = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Petrov = new Student("Петров")
const Ivanov = new Student("Иванов")
arrayPetrov.forEach(item => {
    Petrov.addedLesson(item)
    Ivanov.addedLesson(item)
})

let Students = new Map();
Students.set(Petrov.name, Petrov.lessons)
Students.set(Ivanov.name, Ivanov.lessons)


// Проверка:
console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); // Смирнов
console.log(`Уроки Ивана: тут вывод уроков ивана ${Students}`); // Математика, История
console.log(Students)