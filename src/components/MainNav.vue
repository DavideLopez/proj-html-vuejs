<template>
  <div class="nav">
     <div class="container">
      <div class="logo">
        <img src="../assets/img/logo-dark.png" alt="logo" height="25px">
      </div>

      <div class="navmenu">
        <ul class="navmenu">
          <li>HOME</li>
          <li>LANDING</li>
          <li>PAGES</li>
          <li>DOCS</li>
        </ul>

      </div>

     <div class="buttons">
      <font-awesome-icon icon="fa-magnifying-glass"></font-awesome-icon>

      <div class="active">
        <font-awesome-icon icon="fa-brands fa-github"></font-awesome-icon>
      </div>
      
    <div class="active">
      <font-awesome-icon icon="fa-brands fa-stack-overflow"></font-awesome-icon>
    </div>

    <div class="active">
      <font-awesome-icon icon="fa-regular fa-user"></font-awesome-icon>
    </div>
     </div>
     </div>
    
  </div>
</template>

<script>
export default {
  name: 'MainNav',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
  .container{
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 20px;

     .navmenu{
      display: flex;
      gap: 35px;
      
      
     }

     li:hover {
      color: blue;
      cursor: pointer;
     }

     .buttons {
      color: black;
      display: flex;
      gap: 20px;

      .active {
        color: blue;
        // background-color: aquamarine;
      }
     }

  }


</style>
