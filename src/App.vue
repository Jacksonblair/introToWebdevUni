<template>
  <div id="app">
    <top-menu-bar class="footer"></top-menu-bar>
    <div class="Site-content">

      <div class="left-column"></div>
      <div class="center-column"> 

          <board></board>

      </div>
      <div class="right-column"></div>

    </div>
    <footer-bar class="header"></footer-bar>

  </div>
</template>

<script>
  import TopMenuBar from './components/TopMenuBar.vue'
  import FooterBar from './components/FooterBar.vue'
  import Board from './components/Board.vue'

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      'board': Board,
      'top-menu-bar': TopMenuBar,
      'footer-bar': FooterBar
    }
  }
</script>

<style type="text/css">
  /*
  https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/site.css
  */

  /**
  * 1. Avoid the IE 10-11 `min-height` bug.
  * 2. Set `flex-shrink` to `0` to prevent some browsers from
  *    letting these items shrink to smaller than their content's default
  *    minimum size. See http://bit.ly/1Mn35US for details.
  * 3. Use `%` instead of `vh` since `vh` is buggy in older mobile Safari.
  */

  body {
    margin: 0px;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .footer, .header {
    flex-shrink: 0;
  }

  .Site-content {
    flex: 1 0 auto;
    display: flex;
    flex-direction: row;
  }

  .left-column, .right-column {
    flex: 1;
    flex-basis: 10%;
    border: 1px solid red;
    box-sizing: border-box;
  }

  .center-column {
    flex: 1;
    flex-basis: 80%;
    border: 1px solid red;
    box-sizing: border-box;
    display: flex;
  }

  @media only screen and (max-width: 1100px) {
    .left-column, .right-column {
      flex: 1;
      flex-basis: 0%;
      border: 1px solid red;
      box-sizing: border-box;
    }

    .center-column {
      flex: 1;
      flex-basis: 100%;
      border: 1px solid red;
      box-sizing: border-box;
      display: flex; 
    }
  }

</style>
