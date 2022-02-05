<!-- ИНФОРМАЦИЯ ОБ ОДНОМ ТОВАРЕ -->
<template>
  <div class="container">
    <!-- <div v-if="loading">Идет загрузка...</div>
     <div v-if="!loading">
       <div class="img">
         <img :src="require(`../assets/img/${product.image}`)" :alt="product.image">
       </div>
         <h2>{{ product.title }}</h2>
         <p>{{ product.description }}</p>
         <p>Цена: {{ product.price }} руб.</p>
         <p>В наличии: {{ product.count }} шт.</p>
     </div> -->
    <!-- добавление изображения -->
    <div>
      <img :src="require(`../assets/img/${product.image}`)" :alt="product.image">
    </div>
    <div class="info">
      <h2>{{ product.title }}</h2>
      <p>{{ product.description }}</p>
      <p>Цена: {{ product.price }} руб.</p>
      <p>В наличии: {{ product.count }} шт.</p>
      <button class="button-add" v-if="product.count > 0" @click="this.addToBasket(product)">Добавить в корзину</button>
      <div v-if="this.$store.state.basket[product.id]">
        <div class="count">В корзине: {{this.$store.state.basket[product.id]}}</div>
        <button class="button-delete" @click="this.deleteFromBasket(product)">Удалить</button>
      </div>
    </div>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["addToBasket", "deleteFromBasket"]),
  },
  data() {
    return {
      product: null,
      /* loading: true */
      // чтобы не было ошибки, пока данные не успели прийти (если данные получаем с сервера)
    }
  },
  created() {
    this.$store.state.products.forEach((elem) => {
      if (elem.id === +this.$route.params.id) {
        this.product = elem;
      }
    });
  },
};
</script>


<style>

.info {
  font-family: Inter;
  max-width: 45rem;
}

</style>