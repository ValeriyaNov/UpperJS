// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах.Клиенты приходят и делают заказы на разные блюда.
// Необходимо создать систему управления этими заказами, которая позволит:
//     •Отслеживать, какой повар готовит какое блюдо.•Записывать, какие блюда заказал каждый клиент.
// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента.В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

//     Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.
let cookSpecialisation = new Map();
cookSpecialisation.set('Виктор', 'Пицца');
cookSpecialisation.set('Ольга', 'Суши');
cookSpecialisation.set('Дмитрий', 'Десерты');
// Блюда и их повара:
let dishesChefs = new Map();
dishesChefs.set('Пицца "Маргарита"', 'Виктор');
dishesChefs.set('Пицца "Пепперони"', 'Виктор');
dishesChefs.set('Суши "Филадельфия"', 'Ольга');
dishesChefs.set('Суши "Калифорния"', 'Ольга');
dishesChefs.set('Тирамису', 'Дмитрий');
dishesChefs.set('Чизкейк', 'Дмитрий');

let client1 = { "name": "Алексей" };
let client2 = { "name": "Мария" };
let client3 = { "name": "Ирина" };
let orders = new Map();
orders.set(client1, ['Пиццa "Пепперони"', 'Тирамису']);
orders.set(client2, ['Суши "Калифорния"', 'Пиццa "Маргарита"']);
orders.set(client3, ['Чизкейк']);
// Заказы:
console.log(`Специализация поворов:`);
cookSpecialisation.forEach((chef, specialisation) => {
    console.log(`${chef} - ${specialisation}`);
});
console.log('Повара и их блюда:');
dishesChefs.forEach((chef, dish) => {
    console.log(`${chef} готовит ${dish}`);
});
console.log('Клиенты и их заказы:');
orders.forEach((order, client) => {
    console.log(`${client.name} заказал: ${order.join(' и ')}.`);
});