<template>
  <div>
    <!--페이지를 이동하는 두가지 방법-->
    <!--router-link와 $router.push('/이동할 페이지')-->
    <h4><router-link to="/detail/0">{{ blog[0].title }}</router-link></h4>
    <p>{{blog[0].date}}</p>
  </div>
  <div>
    <h4 v-on:click="$router.push('/detail/1')">{{ blog[1].title }}</h4>
    <p>{{blog[1].date}}</p>
  </div>
  <div>
    <h4><router-link to="/detail/2">{{ blog[2].title }}</router-link></h4>
    <p>{{blog[2].date}}</p>
  </div>
</template>

<script>
export default {
    name:"List",
    props : {
        blog : Object,
    }
}
</script>

<style>

</style>