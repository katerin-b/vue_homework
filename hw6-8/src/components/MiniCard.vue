<!-- КАРТОЧКА ТОВАРА -->
<template>
  <div class="card">
    <!-- добавление изображения -->
    <div class="img">
      <img :src="require(`../assets/img/${obj.image}`)" :alt="obj.image">
    </div>
    <div>
      <h2>{{ obj.title }}</h2>
      <p>{{ obj.description }}</p>
      <p>Цена: {{ obj.price }} руб.</p>
      <p v-if="obj.count > 0">{{ obj.count }} шт.</p>
      <p v-else>Нет в наличии</p>
      <!-- уведомление родительского компонента, что произошло какое-то событие -->
      <router-link class="link" :to="'/product/' + obj.id">Подробнее</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    obj: Object
  }
}
</script>

<style scoped>
/* посмотреть, где подключить шрифт в vue */
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