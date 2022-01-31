<!-- ВСЕ ТОВАРЫ -->
<template>
  <div>Товары</div>
  <!-- 3. использование компонента (обязательно, если компонент импортировали)-->
  <!-- v-for - директива -->
  <mini-card v-for="product in products" :obj="product" :key="product.id"/>
</template>

<script>
// 1. импорт компонента
import MiniCard from "@/components/MiniCard";

// экспорт объекта с описанием компонента
export default {
  // 2. регистрация компонента
  components: {MiniCard}, // // 'MiniCard': MiniCard
  data(){
    return {
      products: null
    }
  },
  created() {
    // XMLHttpRequest
    // get (клиентскаяя сторона собирается получить информацию)
    // fetch - для отправки запроса на сервер
    // первым аргументом передаем строчку запроса (куда)
    // ???? пробовала сложить данные сюда ../assets/products.json не работает
    // заменила на this.$store.state.products
    fetch(this.$store.state.products)
        .then(response => response.json()) // json() text() blob() // ф-ия вызывается, когда получен ответ от сервера
        .then(data => this.products = data); // в эту ф-ию передаются данные, с которыми мы уже можем работать
         // (полученные из объекта response и преобразованные в валидный формат)
  }
}
</script>