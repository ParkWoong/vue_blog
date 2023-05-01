<template>
    <!-- $route.params.id 라우터에서 파라미터 값 --> 
    <div>
    <h4>상세페이지입니다.</h4>
    <h5>{{blog[$route.params.id].title}}</h5>
    <p>{{blog[$route.params.id].content}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'Detail',
    props : {
        blog:Object,
    }
}
</script>

<style>

</style>