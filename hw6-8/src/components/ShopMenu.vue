<template>
  <nav>
<!-- тег router-link создается на основе links: -->
<!-- и он должен создаватьсчя в цикле -->
<!-- если используем цикл внутри однофайлового компонента, то добавлять атрибут :key - обязательно -->
    <router-link v-for="link in links" :key="link.path"
                 :to="link.path">
      {{ link.title }}
    </router-link>
  </nav>
</template>

<script>
export default {   // props - свойство (такие атрибуты будут у компонента: links,
  props: {
    links: {
      required: true,
      type: Array,
      validator(value) {
        if (value.length < 1) return false; // массив не пустой
        // далее проверяем на наличие св-ва в объекте
        // в массиве должен быть объект со свойствами именно title и path
        // [{title: "Name", path: "/home"}, {title: "Name", path: "/products"},]
        // через метод every (для проверок на true/false)
        if (!value.every(link => "title" in link && "path" in link)) return false;
        return true;
      }
    }
  }
}
</script>


<!-- на основе этого массива компонент должен отрисовать навигацию
links: [
 {title: "Название", path: "ссылка"}, - одна ссылка меню
 {}
 ]
-->
