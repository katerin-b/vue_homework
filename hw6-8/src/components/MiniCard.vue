<!-- КАРТОЧКА ТОВАРА -->
<template>
  <div class="card">
    <!-- добавление изображения -->
    <div class="img">
      <img :src="require(`../assets/img/${obj.image}`)" :alt="obj.image">
    </div>
    <div>
      <h2>{{ obj.title }}</h2>
      <!-- в значении свойства description вывести первые 15 символов -->
      <p>{{ obj.description.substring(0, 15)}}...</p>
      <p>Цена: {{ obj.price }} руб.</p>
      <p v-if="obj.count > 0">{{ obj.count }} шт.</p>
      <p v-else>Нет в наличии</p>
      <!-- уведомление родительского компонента, что произошло какое-то событие -->
      <router-link class="link" :to="'/product/' + obj.id">Подробнее</router-link>
      <button class="button-add" v-if="obj.count > 0" @click="this.addToBasket(obj)">Добавить в корзину</button>
      <div v-if="this.$store.state.basket[obj.id]">
        <div>
          <div class="count">В корзине: {{$store.state.basket[obj.id]}}</div>
          <button class="button-delete" @click="this.deleteFromBasket(obj)">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
export default {
  props: {
    obj: Object
  },
 methods: {
   ...mapMutations(["addToBasket", "deleteFromBasket"]),
 }
};
</script>


<style scoped>

.card {
  font-family: Inter;
  width: 16rem;
  display: inline-block;
  vertical-align: top;
  background-color: #eaeef1;
  margin: 2%;
  padding-bottom: 3%;
  border-radius: 4px;
  transition: 1s;
  -webkit-transition: 0.5s;
  cursor: pointer;
  flex: 1 1 auto;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 10px 10px 15px rgba(0,0,0,0.3);
}
.card h2 {
  margin: 0px;
  color: black;
  font-weight: 600;
  font-size: 1.3rem;
  padding-left: 8%;
  padding-top: 8%;
  padding-bottom: 8%;
}
.card p {
  margin: 0px;
  color: #0d131a;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  padding: 3% 3% 3% 8%;
}
.img {
  width: 100%;
  height: 12rem;
  overflow: hidden;
  background-position:center;
  display: flex;
  justify-content: center;
  background-color: white;
}
.link{
  color: #0276d7;
  font-weight: 400;
  font-size: 1rem;
  padding: 3% 3% 3% 8%;
}
</style>

