"use strict";

/* Дан массив, вывести информацию и животных в html.
Необходимо добавить стилей, чтобы карточки выглядели красиво.
Под каждой карточкой добавить кнопку-ссылку 'Подробнее'. */


let app =Vue.createApp({
    data(){
        return {
            animals: [ //  animals - СВОЙСТВО
                {
                    type: "dinosaur",
                    name: "Dino",
                    age: "6 months",
                    color: "multicolored",
                    cover: "https://picsum.photos/seed/picsum/240/240",
                },
                {
                    type: "dragon",
                    name: "Toothless",
                    age: "3 months",
                    color: "black",
                    cover: "https://picsum.photos/seed/picsum/240/240",
                },
                {
                    type: "flying horse",
                    name: "Pegas",
                    age: "2 years",
                    color: "white",
                    cover: "https://picsum.photos/seed/picsum/240/240"
                }
            ]

        }
    }
});
app.mount("#app"); // говорим, что приложение Vue нужно монтировать в элемент id="app"
