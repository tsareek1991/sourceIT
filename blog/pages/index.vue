<template>
  <div>
    <h1>Home page!</h1>
    <aside class="navigation">
      <h2>navigation</h2>
      <ul>
        <li><nuxt-link :to="{ name: 'categories' }">Categories</nuxt-link></li>
      </ul>
    </aside>
  </div>
</template>

<script>


export default {
  components: {
    name: 'index'
  }
}
</script>

<style scoped>
  h1 {
    text-transform: uppercase;
    font-size: 40px;
    text-align: center;
  }
  .navigation {
    width: 300px;
    background-color: #ddd;
    height: 500px;
    text-align: center;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  
</style>
