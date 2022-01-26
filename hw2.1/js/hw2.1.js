"use strict";

let app = Vue.createApp({
    data(){
        return {
            goods: [ //  goods - СВОЙСТВО
                {
                    title: "Пианино",
                    price: 3000,
                    count: 0
                },
                {
                    title: "Гитара",
                    price: 1200,
                    count: 40
                },
                {
                    title: "Барабаны",
                    price: 2700,
                    count: 12
                },
                {
                    title: "Флейта",
                    price: 900,
                    count: 50
                },
                {
                    title: "Арфа",
                    price: 3400,
                    count: 5
                }
            ],
        }
    },
    computed: {
        sortedByCount(){ // сортировка по значению свойства count
            return this.goods.sort((b1, b2) => b1.count - b2.count)
        }
    }
});

app.mount("#app"); // приложение Vue нужно монтировать в элемент id="app"
