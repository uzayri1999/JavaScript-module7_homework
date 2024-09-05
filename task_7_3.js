// Моя семья
const users = [
    { name: 'Magomed', age: 48 },
    { name: 'Madina', age: 46 },
    { name: 'Uzayri', age: 22 },
    { name: 'Alice', age: 18 },
    { name: 'Max', age: 15 },
    { name: 'Naruto', age: 12 }
];

const filteredUsers = users.filter(user => {
    return user.age >= 18;
});

console.log(filteredUsers);

// В условии не понятно каких именно пользователей. Всех позлователей или всех совершеннолетних пользователей?
const adultUserNames = filteredUsers.map(user => {
    return user.name;
});
const userNames = users.map(user => {
    return user.name;
});

// Массив с именами всех пользователей
console.log(userNames);

// Массив с именами совершеннолетних пользователей
console.log(adultUserNames);