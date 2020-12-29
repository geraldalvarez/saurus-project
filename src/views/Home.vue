<template>
  <div class="home">
    <div class="s1">
      <section class="section-1 container">
        <div class="row-1">
          <div class="content">
            <h1>What is <span>Saurus?</span></h1>
            <p>Marketing, Web Development, and Design when combined with a data driven process can be unstappable.</p>
            <div class="btn-img hidden">
              <img src="../assets/contact_us_button.png" alt="contact button">
            </div>
          </div>
          <div class="img-moon">
            <img src="../assets/moon.png" alt="moon">
          </div>
        </div>
        <div class="row-2 wrapper">
          <div class="img-worker">
            <img src="../assets/worker_2.png" alt="miner in front of a laptop">
          </div>
          <div class="img-tent">
            <img src="../assets/worker_tent.png" alt="a tent">
          </div>
        </div>
      </section>
    </div>
    <div class="s2">
      <section class="section-2 container">
        <div class="row-1">
          <div class="content">
            <h2>Our Strategies</h2>
            <p>The Saurus team focuses on levering a data driven process with it's aproaches to creative marketing.</p>
            <div class="btn-img">
              <img src="../assets/contact_us_button.png" alt="contact button">
            </div>
          </div>
          <div class="img-fossil">
            <img src="../assets/dino-hole.png" alt="dino fossil in a hole">
          </div>
        </div>
      </section>
      <section class="section-3 container">
        <div class="row-1">
          <div class="content">
            <h2>Skills & Resources</h2>
            <p>The Saurus team focuses on leveraging a data driven process with its aproaches to creative marketing.</p>
            <div class="btn-img">
              <img src="../assets/the_team_button.png" alt="contact button">
            </div>
          </div>
          <div class="img-amber">
            <img src="../assets/mosquit-hole.png" alt="mosquito in a amber">
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>

<style>
  .home{
    background: #000;
    color: #fff;
  }

  .home .s1{
    background: url("../assets/s1.png");
  }

  .home .s2{
    background: url("../assets/s2.png");
  }

  .home h1{
    font-size: 5rem;
    margin-bottom: 2rem;
  }

  .home h1 span{
    color: #faff99;
  }

  .home h2{
    font-size: 5rem;
    margin-bottom: 2rem;
  }

  .home p{
    font-size: 3rem;
    line-height: 1.2;
    margin: 1rem 0;
  }

  .home section .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home section .btn-img{
    width: 375px;
    margin-top: 2rem;
  }

  .home .section-1 .row-1{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 3rem 0;
  }

  .home .section-1 .row-1 .content{
    width: 40%;
  }
  .home .section-1 .row-1 .content .hidden{
    display: none;
  }

  .home .section-1 .row-1 .img-moon{
    width: 150px;
    margin-left: 9rem;
  }

  .home .section-1 .wrapper{
    width: 80%;
    margin: 0 auto;
  }

  .home .section-1 .row-2{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 7rem;
    /* fix */
    margin-bottom: -5px;
  }

  .home .section-1 .row-2 .img-worker{
    width: 275px;
    /* margin-left: 10rem; */
    margin-left: 10%;
  }

  .home .section-1 .row-2 .img-tent{
    width: 412px;
    margin-right: 10%;
  }

  .home .section-2 .row-1{
    display: flex;
    justify-content: center;
  }

  .home .section-2 .row-1 .content{
    width: 40%;
    margin-top: 10rem;
  }

  .home .section-2 .row-1 .img-fossil{
    width: 725px;
  }

  .home .section-3 .row-1{
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }

  .home .section-3 .row-1 .content{
    width: 40%;
    margin-top: 10rem;
    margin-left: 5rem;
  }

  .home .section-3 .row-1 .img-amber{
    width: 604px;
  }
</style>
