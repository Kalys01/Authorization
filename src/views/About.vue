<template>
  <div class="about">
    <div class="left-content">
      <div class="ablation">
        <h1 >Some information</h1>
        <p>
        <a class="test" href="#">TEST</a>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolor dolore dolorem nihil, consequatur, aperiam unde perferendis impedit mollitia quas dolores ipsam esse eius? Eligendi dolores sint commodi omnis ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vitae quo deserunt eos rerum i Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio modi corrupti cupiditate ratione, dolores, incidunt commodi eaque officia sunt explicabo, voluptatem dolor necessitatibus voluptas minima officiis id laborum repudiandae! Modi laudantium beatae minus eius doloribus facere ea amet vero eligendi magni? Totam obcaecati impedit repellendus! Voluptatibus praesentium, veritatis possimus quidem minima nam harum facere omnis totam numquam magnam, nemo voluptatem illum atque! Sit atque molestias odit fugit alias dignissimos quisquam esse asperiores commodi voluptatum rerum, architecto dolor! Architecto officia harum ipsam illum. Obcaecati, fuga a earum voluptate necessitatibus adipisci nam totam autem quibusdam nihil excepturi ullam? Illo est natus libero atque repudiandae excepturi dicta, delectus culpa autem tempora impedit iste illum eius cupiditate unde inventore provident blanditiis sapiente. Harum, voluptate vel. Nobis tenetur explicabo magni eos eligendi? Mollitia quia ab laboriosam sequi modi totam. Eum incidunt sunt corrupti veniam consequuntur illo odit, quas mollitia, provident, ducimus nam expedita tempora! At ducimus ratione reprehenderit ex alias aspernatur ad nam quaerat dolore illum maxime cumque quod, porro nostrum beatae praesentium. Provident tempore vero, qui expedita minus accusamus delectus velit, assumenda reprehenderit molestias soluta repellat optio ea perspiciatis corrupti? Cumque deserunt, delectus est eveniet quae dolor qui labore necessitatibus impedit provident magni hic, perferendis, eum repudiandae rerum nulla nam inventore. At quis vero aut repellendus libero aspernatur sint commodi provident ut, non impedit, distinctio modi fugiat autem expedita? Consequuntur delectus quam labore, fuga sequi vitae a alias mollitia praesentium? In perferendis, asperiores aliquid veniam laudantium enim quasi autem, ratione alias mollitia fuga magnam, dolore ex ducimus! Id temporibus magni vero vel culpa, quia natus corrupti consectetur inventore sit maiores odit illum, illo error ut labore! Consequatur veritatis illum enim hic esse provident sequi ullam corrupti nesciunt culpa! Veritatis dolor quia, eos quaerat mollitia non, culpa, consequuntur et hic unde aspernatur excepturi quae voluptas incidunt fuga voluptatem consectetur consequatur quis! Adipisci eius consequuntur delectus maiores ipsam, libero debitis, inventore, tempora distinctio assumenda ducimus nulla repellendus nostrum eligendi quia incidunt deleniti doloremque saepe. Cum nulla, totam sit molestias doloremque ullam ex expedita aspernatur mollitia dolores numquam minima eligendi modi. Officia, accusantium dolor magnam dolorum odit maiores non aperiam dolores quidem nesciunt, ipsum dignissimos, corrupti nisi obcaecati libero veritatis aut rem! Consequatur ullam iste itaque dignissimos? Ullam dolores ipsum tenetur molestiae, accusantium fuga modi eius placeat incidunt sed consectetur mollitia alias ad, asperiores, ex voluptas. Saepe, laudantium necessitatibus! Eos, officia consequatur optio, modi itaque dolor repellendus laborum quae, in ratione repellat minus reprehenderit ex! Nulla tempora aut unde, aliquam nobis saepe? Error quos fugiat adipisci ratione minus ducimus porro eos architecto doloremque vitae, sequi sit autem quam expedita blanditiis doloribus, voluptatem consequuntur qui tenetur! Consequatur praesentium mollitia officiis! Quos magnam enim qui voluptates reprehenderit dolores, explicabo unde mollitia aliquam voluptate suscipit in alias amet velit vero reiciendis error eius excepturi libero! Distinctio, illum qui ea in dolorem necessitatibus recusandae! Minus, corrupti magni illum consequatur provident incidunt quam quod dicta unde ut iure eligendi id saepe earum animi reprehenderit quos tempore necessitatibus aliquam beatae, velit iste porro minima! Repellendus recusandae vero quasi cum suscipit laudantium quos ullam, obcaecati at esse eveniet aliquam culpa facere ab ex deleniti dicta cupiditate adipisci, perferendis ea. Blanditiis, earum? 
        </p>
      </div>
  </div>
  <div class="right-content">
    <h4><router-link to="/" class="white-underline-right-to-left back">Close</router-link></h4>
    <div class="ablation2">
      <h1>hello!</h1>
      <p>
        I'm Zhekshenov Kalys Taalaibekovich <br/> I'm a junior Front End Web developer.
        I'm eager to learn and to perfect my Front End Development skills. Responsible and hardworking fast-learner who is always eager to broaden knowledge, increase competence, and achieve heights with the team through challenges and leaving the comfort zone as often as possible.
        Great desire to work in foreign IT companies.
        I'm interested in Front End Development. Favorite technologies JS, VueJS, TypeScript, C# 
      </p>
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
