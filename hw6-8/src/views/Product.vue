<!-- ИНФОРМАЦИЯ ОБ ОДНОМ ТОВАРЕ -->
<template>
  <div v-if="loading">Идет загрузка...</div>

  <div v-if="!loading"></div>
  <div>
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
    <p>Цена: {{ product.price }} руб.</p>
    <p>В наличии: {{ product.count }} шт.</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: null,
      loading: true // чтобы не было ошибки, пока данные не успели прийти (если данные получаем с сервера)
    }
  },
  created() {
    // ???? откуда забрать информацию
    // чтобы получить параметр запроса обращаемся к маршрутизатору ко всем его параметрам, а после указать имя параметра
    // имя параметра - что после :
    // this.$route.params.id - обращаемся к маршрутизатору ко всем параметрам и получаем значение параметра id
    fetch('../assets/products.json' + this.$route.params.id) // $ - часть имени (не синтаксис js)
        // response - объект, который содержит информацию об ответе (статус: успешно или нет, заголовки + данные)
        .then(response => response.json())
        // данные сохраняем в значение св-ва product
        // .then(data => this.product = data);
        .then(data => {
          // здесь нужно будет прописывать проверки (найдены данные или нет)
          this.product = data;
          this.loading = false; // loading изменится только после того, как product получит свои данные
        });
  }
}
</script>