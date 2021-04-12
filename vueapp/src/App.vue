<template>
  <div id="app">
    <home/>
    <a href="https://www.linkedin.com/in/joosep-parts-21233a17b/"><img alt="linkedin" src="./assets/linkedin.png" width="50" height="50" margin="10" padding="10"></a>
    <a href="https://github.com/Nurech"><img alt="github" src="./assets/github.png" width="50" height="50" margin="10" padding="10"></a>
    <a href="https://www.codewars.com/users/Nurech"><img alt="codewars" src="./assets/codewars.jpg" width="50" height="50" margin="10" padding="10"></a>
  </div>

</template>



<script>
import home from './components/home.vue'
export default {
  name: 'app',
  components: {
    home
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
  margin: 40px 10 10;
}
ul {
  list-style-type: none;
  padding: 10;
}
li {
  display: inline-block;
  margin: 10 10px;
}
a {
  color: #42b983;
}

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 1+ 10px;
}
a {
  color: #42b983;
}
</style>