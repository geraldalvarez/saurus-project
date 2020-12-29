<template>
  <div class="navbar">
      <div class="container">
          <div class="wrapper">
            <div class="logo">
                <img class="desktop-logo" src="../assets/logo.png" alt="logo">
                <img class="mobile-logo" src="../assets/new_logo.jpg" alt="logo">
            </div>
            <nav>
                <ul>
                    <li>Contact Us</li>
                    <li>FR</li>
                </ul>
            </nav>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>
    
<style>
    .navbar{
        background: #000;
        color: #fff;
    }

    .navbar .wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        margin: 0 auto;
        padding: 3rem 0;
    }

    .navbar .logo{
        width: 700px;
    }

    .navbar .logo .mobile-logo{
        display: none;
    }

    .navbar nav ul{
        display: flex;
        font-size:  2.4rem;
    }

    .navbar nav ul li{
        padding: 1.2rem 1.4rem 0.8rem 1.4rem;
        margin-left: 3rem;
        border: 5px #fff solid;
        border-radius: 50px;
    }
</style>