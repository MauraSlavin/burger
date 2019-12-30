// var item = 2;
// var items = [{id:1}, {id:2}, {id:3}];

// var foundIndex = items.findIndex(x => x.id == item.id);
// items[foundIndex] = item;

burgers = [
    {
        id: 4,
        name: "Mushroom",
        devoured: false
    },
    {
        id: 3,
        name: "Bacon",
        devoured: false
    },
    {
        id: 5,
        name: "Cheese",
        devoured: false
    },
    {
        id: 2,
        name: "Plain",
        devoured: false
    }
];

const id = 2;
const found = burgers.findIndex(item => item.id == 2);
console.log("Id: ", id);
console.log("Found item:");
console.log(burgers[found]);


