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
  computed: {
    products() {
      console.log(this.$store.state);
      return this.$store.state.products
    }
  }
}
</script>