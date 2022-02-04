<template>
<!-- ВНЕШНИЙ ВИД КОМПОНЕНТА (HTML РАЗМЕТКА, НО ГЕНЕРИРУЕТСЯ В JS ФАЙЛ)-->
<!-- 2.3. ИСПОЛЬЗОВАНИЕ КОМПОНЕНТА (обязательно, если компонент импортировали (иначе сборка будет падать)) -->
<!-- <ShopMenu></ShopMenu> -->
  <shop-menu :links="tabs"></shop-menu>
<!-- Если между открывающим и закрывающим тегом никакой контент не передаем, то пишем одиночный тег <router-view/> -->
  <router-view/>
</template>


<script>
// 2.1 ИМПОРТ КОМПОНЕНТА
//import ShopMenu from "./components/ShopMenu";
import ShopMenu from "@/components/ShopMenu"; // @ - src

/* ЭКСПОРТИРУЕМ НАРУЖУ ОБЪЕКТ С ОПИСАНИЕМ КОМПОНЕНТА, ЧТОБЫ МОЖНО БЫЛО ИСПОЛЬЗОВАТЬ */
export default {
// 2.2 ЛОКАЛЬНАЯ РЕГИСТРАЦИЯ КОМПОНЕНТА (если компонент используется локально)
// (ГЛОБАЛЬНАЯ В MAIN.JS)
  components: {ShopMenu},
// описание компонента:
// data, computed, methods, props, emits, хуки жизненного цикла
// метод data возвращает объект
// на этой основе будет создаваться меню
  data(){
    return {
      tabs: [
        {title: "Главная", path: "/"},
        {title: "Все товары", path: "/products"},
      ]
    }
  }
}
</script>

<style lang="css">
/* ЛОКАЛЬНЫЕ СТИЛИ (SCOPED)(ДОСТУПНЫ ОДНОМУ КОМПОНЕНТУ)
<style lang="css" scoped>*/
/*  ГЛОБАЛЬНЫЕ СТИЛИ (БЕЗ SCOPED)(ДОСТУПНЫ ВСЕМ КОМПОНЕНТАМ)(ПРИ СБОРКЕ СОБЕРЕТСЯ В CSS)*/
/*
атрибуты тега style:
lang="css" - значение по умолчанию, css синтаксис
(можем использовать синтаксис любого препроцессора saas и т.д)
lang="sass" - sass синтаксис
lang="scss" - scss синтаксис
lang="less" - less синтаксис

*/

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

h1{
  font-family: Inter;
  font-size: 1.6rem;
}
.container {
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
}

</style>

