<template>
	 <div id="second">
	 	 <h1>简介</h1>
	 	 <a href="" class="msgc">written by {{author}}</a>
	 	 <p>项目优势</p>
	 	 <ol>
	 	 	<li v-for="advent in advents">{{advent.title}}</li>
	 	 </ol>
	 	 <div >
		 	 <input type="checkbox" id="checkbox" v-model="checked"/>
		 	 <a href="">20协议</a><label for="checkbox" v-bind:class="{tips:checked}">请同意协议！</label>
	 	 </div>
	 </div>
</template>
<script>

	 export default{
	 	 data(){
	 	 	 return {
	 	 	 	 author:'caixin',
	 	 	 	 advents:[
	 	 	 	  { title: 'Vegetables' },
		      { title: 'Cheese' },
		      { title: 'Whatever else humans are supposed to eat' }],
		      checked: false
         
	 	 	 }
	 	 },
	 	  methods: {
        alocked: function (item) {
            item.state = !item.state;
        }
    }

	 }
</script>
<style>
   a{text-decoration: none;color:#ccc;}
   label.tips{display: none;}
   label{color:rgb(255,84,31);}
	 .msgc{color:rgb(255,84,31);}
</style>