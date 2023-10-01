// 1 :



// let users = {}

// for(let i = 1; i <= 10; i++) {
//     let name = prompt('Введите имя');
//     let age = prompt('введите возраст');
//     users[i] = {name,age};
// }

// for(let key in users) {
//     console.log(`Пользователь : ${key}`);
//     console.log(`Ваше имя ${users[key].name}`);
//     console.log(`Ваше возраст ${users[key].age}`);
// }




// 2 :

let rec2 = receipt();
let productList = '';
let totalPrice = 0
for (let key in rec2) {
    productList += key + ', ';
    totalPrice += rec2[key].price;
    info = rec2[key].info
}


productList = productList.slice(0, -2);
totalPrice += 9000
console.log(`vi zakazali ${productList} ${info} | obw. cena ${totalPrice} s dostavkoy 9000`);