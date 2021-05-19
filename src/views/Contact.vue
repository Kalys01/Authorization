<template>
  <div class="about">
    <div class="left-content">
      <div class="ablation">
        <h1 >Contact information</h1>
      </div>
  </div>
  <div class="right-content">
    <h4><router-link to="/" class="white-underline-right-to-left back">Close</router-link></h4>
    <div class="ablation2">
      <h1>hello!</h1>
      <h3>number</h3><hr>
      <p class="number">+999 555 501 113</p>
      <h3>follow</h3><hr>
      <ul>
        <li><a class="soc-link" href="https://vk.com/kzh_113">Vk</a></li>
        <li><a class="soc-link" href="https://app.slack.com/client/TNBRHB61H/CNR5TBUPR">Slack</a></li>
        <li><a class="soc-link" href="https://github.com/Kalys01">GitHub</a></li>
        <li><a class="soc-link" href="https://www.linkedin.com/in/kzhekshenov/">Linkedin</a></li>
        <li><a class="soc-link" href="https://tlgg.ru/kzhekshenov">Telegram</a></li>
      </ul>
      <h3>g-mail</h3><hr>
      <li>
        <a class="soc-link" href="mailto:kalysosmon96.g@gmail.com">kalysosmon96.g@gmail.com</a>
      </li>
    </div>
  </div>
  </div>
</template>

<style scoped>
.about {
  width: 105%;
  display: flex;
  position: relative;
}

h3 {
  margin: 20px 0 10px 0;
}
.number,
.soc-link:hover {
  color: green;
}

::-webkit-scrollbar{
    width: 13px;
    }
.template {
    width: 105%;
    display: flex;
    position: relative;
}
.left-content, .right-content {
    display: flex;
    height: 100vh;
    transform: skewX(-6grad);
    align-items: center;
    /* transform: matrix(1, 0, -0.08715, 0.99619, 0, 0); */
}
.left-content {
    width: 70%;
    overflow: hidden;
    margin-left: -2%;
    /* background: pink; */
}
.right-content {
    background: black;
    position: relative;
    width: 30%;
    color: white;
}

/* INSIDE TEXT */
.ablation,
.ablation2 {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 80vh;
  overflow-y: auto;
  padding: 90px 50px;
}
.ablation {
  transform: skewX(6grad);
}

/* BUTTON TO RETURN */
.back {
  position: absolute;
  top: 10px;
  right: 18%;
  font-family: Bebas, sans-serif;
  font-weight: bold;
  text-transform: uppercase;    
}

h1, h2, h3, h4, h5, h6 {
  text-transform: uppercase;
  font-family: Bebas, sans-serif;
  font-weight: bold;
}
h1 {
  font-size: 70px;
}
a {
  color: white;
  text-decoration: none;
}
li {
  list-style: none;
  position: relative;
  text-transform: uppercase;
}
ul {
  line-height: 25px;
  text-transform: uppercase;
}
p {
  font-family: "Open Sans Condensed", Arial, sans-serif;
  line-height: 25px;
}
</style>
