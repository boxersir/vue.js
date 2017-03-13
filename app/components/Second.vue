<template>
    <div id="firstcomponent">
        <h1 v-on:click="show()">这是第二个组件</h1>
        <a class="msgc">written by {{author}}</a>
    </div>
</template>
<script type="text/javascript">
    export default{
        data(){
            return{
                author:'boxser',
                date:new Date()
            }
        },
        methods: {
            show:function(){
                alert(this.date)
            }
        }
    }
</script>
<style>
    .msgc{color:rgb(255,84,31);}
</style>