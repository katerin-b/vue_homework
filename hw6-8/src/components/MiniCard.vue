<!-- КАРТОЧКА ТОВАРА -->
<template>
  <div>
    <!-- добавление изображения -->
    <img :src="require(`../assets/${obj.image}`)" :alt="obj.image">
    <h2>{{ obj.title }}</h2>
    <p>{{ obj.description }}</p>
    <p>Цена: {{ obj.price }} руб.</p>
    <!-- или так ? <p v-if="obj.count">{{ obj.count }} шт.</p>   -->
    <p v-if="obj.count > 0">{{ obj.count }} шт.</p>
    <p v-else>Нет в наличии</p>
    <!-- уведомление родительского компонента, что произошло какое-то событие -->
    <router-link :to="'/product/' + obj.id">Подробнее</router-link>
  </div>
</template>
<script>
export default {
  props: {
    obj: Object
  }
}
</script>