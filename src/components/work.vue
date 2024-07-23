<template>
<h1>transition hook</h1>
<p>this code below we will use some example hook "after enter"</p>
<button @click="pVisible=true">create a p tag</button>
    <transition @after-enter="onAfterEnter">
        <p v-show="pVisible" id="p1"></p>
    </transition>
    <br>
    <div v-show="divVisible">This appears after the "enter-active" phase of the transition.</div>
</template>    
<script>
export default {
    name: 'work',
    data(){
        return{
            pVisible: false,
            divVisible: false
        }
    },
    methods:{
        onAfterEnter() {
            this.divVisible= true;
        }
    }
}
</script>
<style scoped>
.v-enter-active{
    animation: swirlAdded 1s;
}
@keyframes swirlAdded {
    from{
        opacity: 0;
        rotate: 0;
        scale: 0.1;
    }
    to{
        opacity: 1;
        rotate: 360deg;
        scale:1;        
    }
}
#p1, div{
    display: inline-block;
    padding: 10px;
    border: dashed black 1px;
}
#pi{
    background-color: lightgreen;
}
div{
    background-color: lightpink;
}
</style>