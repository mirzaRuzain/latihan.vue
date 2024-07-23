<template>
<h3>GENRES</h3>
    <div class="cardbox">
        <button class="genre" v-for="gen in genre" :key="gen">{{ gen }}</button>
    </div>
    <hr>
        <div class="last">
            <img src="https://novelfire.net/logo.svg?v=2" alt="">
            <p id="pe1">NovelFire.net is created in hopes that every novel fan can get to read novel without paying a dime, this site is completely free of charge. To read novel online for free, all you need to do is to visit NovelFire, search for the novel you want to watch, and enjoy reading it at no cost and with no risk.</p>
            <div class="linkbwh">
                <ul>Userful Link
                <li v-for="item in items" :key="item.name"><a :href="item.link"></a></li>
                
                </ul>
            </div>

        </div>
</template>
<script>
export default {
    name: 'foot-er',
    data(){
        return{
            genre:['Action','Adventure','Comedy','Fantasy','Supernatural','Sci-fi'],
            items:[
                {name:'Latest Novel', link:'#'},
                {name:'Latest Release Novel', link:'#'},
                {name:'Novel Ranking', link:'#'},
                {name:'Homepage', link:'#'}
            ]
        }
    }
}
</script>
<style>
#pe1{
    width: 300px;
}
.cardbox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px; /* Adds space between the items */
}

.genre {
  padding: 0px 5px;
  background-color: skyblue;
  border: solid 1px black;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease;
}

.genre:hover {
  background-color: deepskyblue;
}
.last{
    padding: 30px 30px;
    display: flex;
    justify-content: center;
}
img{
    margin-right:30px ;
}
</style>
