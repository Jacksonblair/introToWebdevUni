<template>
  <div id="app">
    <header-bar class="header"></header-bar>
    <div class="Site-content">

      <div class="left-column"></div>
      <div class="center-column"> 

          <router-view></router-view>

      </div>
      <div class="right-column"></div>

    </div>
    <footer-bar class="footer"></footer-bar>

  </div>
</template>

<script>
  import HeaderBar from './components/HeaderBar.vue'
  import FooterBar from './components/FooterBar.vue'

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      'header-bar': HeaderBar,
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
    flex-basis: 80%;
    border: 1px solid red;
    box-sizing: border-box;
  }

  @media only screen and (max-width: 1100px) {
    .left-column, .right-column {
      flex: 1;
      flex-basis: 0%;
      border: 1px solid red;
      box-sizing: border-box;
    }

    .center-column {
      flex-basis: 100%;
      border: 1px solid red;
      box-sizing: border-box;
    }
  }

</style>
