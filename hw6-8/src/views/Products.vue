<!-- ВСЕ ТОВАРЫ -->
<template>
  <div>Товары</div>
  <!-- 3. использование компонента (обязательно, если компонент импортировали)-->
  <!-- v-for - директива -->
  <div class="container">
    <mini-card v-for="product in products" :obj="product" :key="product.id"/>
  </div>
</template>

<script>
// 1. импорт компонента
import MiniCard from "@/components/MiniCard";

// экспорт объекта с описанием компонента
export default {
  // 2. регистрация компонента
  components: {MiniCard}, // // 'MiniCard': MiniCard
  computed: {
    products() {
      console.log(this.$store.state);
      return this.$store.state.products
    }
  }
}
</script>

<style>
.container {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}
</style>