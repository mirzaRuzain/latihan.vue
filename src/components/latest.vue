<template>
    <div>
        <header-component/>
    </div>
    <div class="mainLatest">
        <div class="cardbox">
            <div class="cardmain">
                
            </div>
        </div>
    </div>
    <foot-er/>
</template>
<script>
import header from './components/header.vue'
import footer from './components/footer.vue'
export default {
    components:{
        'header-component' : header,
        'foot-er' : footer
    }
}
</script>