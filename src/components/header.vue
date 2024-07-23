<template>
  <div class="header">
    <div class="container">
      <h1>NovelFire</h1>
      <nav>
        <a @click="toNew" href="#">Novel Terbaru</a>
        <a @click="toBest" href="#">Novel Terpopuler</a>
        <a @click="toGenre" href="#">Genre</a>
        <a @click="toBookmark" href="#">Bookmark</a>
      </nav>
      <h2>LOGIN</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-component',
  data(){
    return{

    }
  },
  methods:{
    toNew(){
        return 'latest.vue'
    },
    toBest(){
        return 'latest.vue'
    },
    toGenre(){
        return 'latest.vue'
    },
    toBookmark(){
        return 'latest.vue'
    }
  }
}

</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.header {
  background-color: rgb(40, 58, 73);
  border-bottom: dotted 1px silver;
  
}

.container {
  max-width: 1500px;
  background-color: rgb(40, 58, 73);
  margin: 0 auto;
  padding-left: 50px;
  border-bottom: solid 3px silver;
  padding: 0 15px; /* Menambahkan padding kiri dan kanan */
  display: flex;
  align-items: center;
  justify-content: center; /* Menempatkan elemen di sebelah kiri */
  gap: 20px; /* Menambahkan jarak antara elemen */
  border-bottom: solid 1px silver;
}

h1 {
  margin: 0 20px;
  color: rgba(255, 255, 255, 0.692);

}
h2{
    margin-left: 20px;
    background-color: rgb(38, 63, 133);
    border-radius: 5px;
    color: rgba(255, 255, 255, 0.692);
    cursor: pointer;
    padding: 10px 10px;
    border: solid 2px rgba(8, 25, 48, 0.863);
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  color:  rgba(255, 255, 255, 0.692);
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>
