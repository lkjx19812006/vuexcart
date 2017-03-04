<style></style>
<template>
    <div class="parents">
        <button @click="add">点击我</button>
        <p>{{isOk}}</p>
    </div>
</template>
<script>
// 组件中必须引入映射方法
import { mapActions } from 'vuex';
export default {
    name: 'App',
    data(){
        return {

        }
    },
    methods:mapActions({
        add:'actionC'
    }),    
    computed:{
        isOk(){
            return this.$store.state.time;
        }
    }
}


</script>