<template>
  <div class="galleries">
    <div
      v-for="gallery in galleries"
      :key="gallery.id"
      class="img"
    >
      <img
        :src=" require('../assets/img/' + gallery.image) "
        :alt="gallery.name"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'galleries',
  data: () => ({
    galleries: [
      {
        image: "fox.jpg",
        name: "fox",
        id: "1"
      },
      {
        image: "squirrel.jpg",
        name: "squirrel",
        id: "2"
      },
      {
        image: "deer.jpg",
        name: "deer",
        id: "3"
      },
      {
        image: "lion.jpg",
        name: "lion",
        id: "4"
      },
      {
        image: "city.jpg",
        name: "city",
        id: "5"
      },
      {
        image: "elephant.jpg",
        name: "elephant",
        id: "6"
      },
      {
        image: "pantera.jpg",
        name: "pantera",
        id: "7"
      },
      {
        image: "panda.jpg",
        name: "panda",
        id: "8"
      },
      {
        image: "zebra.jpg",
        name: "zebra",
        id: "9"
      },
    ],
  }),
}
</script>

<style scoped>
.galleries {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: rgb(224, 224, 224);
}
.img {
  width: 300px;
  height: 350px;
  display: flex;
  justify-content: center;
  opacity: .5;
  margin: 20px;
  z-index: 3;
}
img {
  width: 100%;

}
.img:hover {
  transition: ease .5s;
  opacity: 1;
}
</style>
