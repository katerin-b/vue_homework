"use strict";

let articles =  [
    {
        title: "Нейросеть может читать текст быстрее человека",
        image: "https://picsum.photos/id/22/250/250"
    },
    {
        title: "Пять сервисов, которые помогут написать статью за 5 минут",
        image: "https://picsum.photos/id/24/250/250"
    },
    {
        title: "Названы основные правила движения поездов",
        image: "https://picsum.photos/id/28/250/250"
    },
    {
        title: "Самая посещаемая достопримечательность мира",
        image: "https://picsum.photos/id/27/250/250"
    },
    {
        title: "Появился новый термин для обозначения радиоволн",
        image: "https://picsum.photos/id/29/250/250"
    },
    {
        title: "В России появится новый вид бумаги",
        image: "https://picsum.photos/id/30/250/250"
    }
];

let app = Vue.createApp({
    data(){
        return {
            tabTitles: ["Отобразить сеткой", "Отобразить списком"],
            currentTabTitle: "Отобразить сеткой",
            articles: articles
        }
    }
});
app.mount("#app"); // приложение Vue нужно монтировать в элемент id="app"