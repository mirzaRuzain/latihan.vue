<template>
  <div>
    <h4>Read light novel, web novel, Korean or Japanese novel and translate novel for <b>FREE</b></h4>
    <h2>LATEST NOVELS</h2>
    <hr>
    <div class="card-box">
      <div class="card-main" v-for="card in cards" :key="card.name">
        <img :src="card.img" :alt="card.name" class="card-image" />
        <div class="card-content">
          <h3>{{ card.name }}</h3>
          <p>{{ card.chapter }} Chapters</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-home',
  data() {
    return {
      cards: [
        { name: 'Shadow Slave', img: 'https://novelfire.net/server-1/shadow-slave.jpg', chapter: 1758 },
        { name: 'Shadow Slave', img: 'https://novelfire.net/server-1/shadow-slave.jpg', chapter: 1758 },
        { name: 'Shadow Slave', img: 'https://novelfire.net/server-1/shadow-slave.jpg', chapter: 1758 },
        { name: 'Shadow Slave', img: 'https://novelfire.net/server-1/shadow-slave.jpg', chapter: 1758 },
        { name: 'Shadow Slave', img: 'https://novelfire.net/server-1/shadow-slave.jpg', chapter: 1758 },
        { name: 'Shadow Slave', img: 'https://novelfire.net/server-1/shadow-slave.jpg', chapter: 1758 },
        { name: 'Shadow Slave', img: 'https://novelfire.net/server-1/shadow-slave.jpg', chapter: 1758 },
        { name: 'Shadow Slave', img: 'https://novelfire.net/server-1/shadow-slave.jpg', chapter: 1758 },
        { name: 'Shadow Slave', img: 'https://novelfire.net/server-1/shadow-slave.jpg', chapter: 1758 },
        { name: 'Shadow Slave', img: 'https://novelfire.net/server-1/shadow-slave.jpg', chapter: 1758 }
      ]
    };
  }
}
</script>

<style>
.card-box {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card-main {
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  width: 200px;
  text-align: center;
}

.card-image {
  width: 100%;
  height: auto;
}

.card-content {
  padding: 10px;
}

.card-content h3 {
  margin: 0;
}

.card-content p {
  margin: 5px 0 0;
}
</style>
