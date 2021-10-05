<template>
  <div>
  <b-navbar toggleable="lg" type="dark" class="text-center" variant="success">
       <b-navbar-brand href="#" class="title-navbar" >Rick and Morty</b-navbar-brand>
       <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
         <b-navbar-nav>
            <b-nav-item :to="{ path: '/' }">
                Home
            </b-nav-item>
         </b-navbar-nav>
        </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
 name:"PxHeader"
}
</script>

<style scoped lang="scss">
 .title-navbar{
    margin-left: 10px;
    font-size: 25px;
 }

 .link{
     list-style: none;
 }

</style>