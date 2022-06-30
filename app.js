$(document).ready(function () {



  function reveal() {
    let reveals = document.querySelectorAll(".reveal")
    for (let i = 0; i < reveals.length; i++) {
      //window.innerHeight will give us the height of the viewport
      let windowHeight = window.innerHeight;
      //getBoundingClientRect().top gives us this distance from the top of the viewport 
      let elementTop = reveals[i].getBoundingClientRect().top;
      //elementVisible is the height at which the element should be revealed to the user.
      let elementVisible = 125;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  function revealsideR() {
    let reveals = document.querySelectorAll(".reveal-side-r")
    for (let i = 0; i < reveals.length; i++) {
      //window.innerHeight will give us the height of the viewport
      let windowHeight = window.innerHeight;
      //getBoundingClientRect().top gives us this distance from the top of the viewport 
      let elementTop = reveals[i].getBoundingClientRect().top;
      //elementVisible is the height at which the element should be revealed to the user.
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  function revealsideL() {
    let reveals = document.querySelectorAll(".reveal-side-l")
    for (let i = 0; i < reveals.length; i++) {
      //window.innerHeight will give us the height of the viewport
      let windowHeight = window.innerHeight;
      //getBoundingClientRect().top gives us this distance from the top of the viewport 
      let elementTop = reveals[i].getBoundingClientRect().top;
      //elementVisible is the height at which the element should be revealed to the user.
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }



  window.addEventListener("scroll", reveal);
  window.addEventListener("scroll", revealsideR);
  window.addEventListener("scroll", revealsideL);



  const rufus = document.getElementsByClassName("rufus")
  const chatBubble = document.getElementsByClassName(`chat_bubble`);

  $(rufus).click(function () {
    $(chatBubble).text(`Ah, I forgot I am a dog. Well, good luck buddy.`);
    if (french === true) {
      $(chatBubble).text(`Ah, j'oublie que je suis un chien. Bon courage mon pôte.`);
    }
  })

  const FR = document.getElementsByClassName("fr")
  $(FR).click(function () {
    french = true;
    if (french === true) {
      $(`p.myBikeDatabase`).replaceWith(`<p class="myBikeDatabase reveal">MyBikeDatabase est une application qui permet l'utilisateur à suivre les spécifications de nombreux de ses vélos. 
    Il peut-être utilise pour enregrister des spécifications très obscur lequel peut-être très facile oublier mais très difficile mesurer-- pourquoi le faire plus qui soit nécessaire? 
    Aussi, il possède la mise en pratique commerciale pour les magasins du vélo à gerer leurs clients. Comme tous les applications full-CRUD, les vélos soumis ont la capacité être modifié et supprimé par le créateur. 
    Quelques des technologies utilisé incluent:
    <br/>
    <br/>
        • MongoDB</br>
        • React</br>
        • Express</br>
        • Node</br>
        • Javascript</br>
    <br/>
    A l'instant, myBikeDatabase est hébergé sur Heroku et il y aura des additions dans l'avenir qui incluent à se connecter et s'inscrire.
</p>`);
      $(rufus).attr("src", "images/rufus_francais.png")
      $(`p.Hells_Spoon`).replaceWith(`<p class="Hells_Spoon reveal">«Hell's Spoon» est un application sociale pour partager des recettes culinaire. L'application full-stack est construit en utilisant:</br>
      <br/>
      • MongoDB<br/>
      • Express<br/>
      • EJS<br/>
      • Node<br/> 
      <br/>
      Inspiré par la titre d'une émission de télé tres populaire qui présent Gordon Ramsay, «Hell's Spoon» vous permet vous inscrire une compte pour partager vos recettes preferées. 
      Grace à l'intergiciel «Cloudinary», les utilisateurs connecté peuvent mettre en ligne des photos de leur plats.
      </p>
      </div>`)
      $(`p.WRESTL`).replaceWith(`<p class="WRESTL reveal">Un jeu du mot «RESTful» API, cette application en React monts des informations des evenements dans l'histoire du catch. 
      Le backend et l'interface utilisateur fonctionnent grace aux technologies suivante:
      <br/>
      <br/>
      • Python<br/>
      • Django<br/>
      • React<br/>
      <br/>
      
      Cette API raconte en détail des événements du catch par la promotion, l'anée, le note moyen de la qualité des matchs (fonde sur le journal historique «Wrestling Observer Newsletter»), 
      le meilleure match, la durée, et s'il y a des points significatif.</p>
  </div>`)
      $(`#projets`).text(`Projets`)
      $(`#experience`).text(`Expérience`)
      $(`#skill`).text(`Competences`)
      $(`#about`).replaceWith(`<p id="about">Je suis un ingénieur-conseil en informatique qui possede des experiences en Javascript, React, HTML5, jQuery, CSS, et des environnement dorsal en utilisant le Python, Django, Express, REST APIs, MongoDB, et SQL. 
    <br/>
    <br/>
    Avant d'être devenu un ingénieur-conseil, je me specialisais aux beaux-arts et le français-- ceux les deux continuent me soutenier comme je les intègre à ma vie du coding. 
    <br/>
    <br/>
    J'espère me trouver en travaillant pour une entreprise qui partage mes valeurs en paix, les droits-humains, le traitement respecteux aux animaux, et préserver le climat habitable de notre monde.
    <br/>
    <br/>
   <a id="resume" target="_blank" href="resume_web.pdf">Cliquez ici</a></p>`)
      $(`#resume`).replaceWith('<p id="resume">Pour voir mon CV, <a id="resume" href="resume_web.pdf" target="_blank"><u>cliquer ici</u></a>.</p>')
      $(`#terminal`).text("Des jeux en Terminale")
    }
  })


  const EN = document.getElementsByClassName("en")
  $(EN).click(function () {
    french = false;
    $(`#about`).replaceWith(`<p id="about">I'm a software engineer with experience in Javascript, React, HTML5, jQuery, CSS, and backend frameworks using Python, Django, Express, REST APIs, MongoDB, and SQL. 
<br/>
<br/>
Prior to becoming a software engineer, my background was in Art and French which has been fun to incorporate into my coding life. 
<br/>
<br/>
That said, I hope to lend my skills and offer creative solutions for companies that share my values in peace, human rights, treating animals with respect, and preserving our planet's habitable climate.
<br/>
<br/>
<a id="resume" target="_blank" href="/POST-BOOTCAMP/new_site/resume_web.pdf">Click here</a></p>`);
    $(`p.myBikeDatabase`).replaceWith(`<p class="myBikeDatabase reveal">MyBikeDatabase is a full-stack MERN application that allows users to keep track of the metrics for their bicycles' components using a very thorough and detailed bike schema.
It can be used for personal record-keeping to ensure compatibility for replacing and ordering new parts. It also has commercial application for client/inventory management.Like any full-CRUD application, submitted bicycles can be edited and deleted.
Some of the coding technologies used include:
<br/>
<br/>
    • MongoDB</br>
    • React</br>
    • Express</br>
    • Node</br>
    • Javascript</br>
<br/>
Currently hosted on Heroku, updates and plans for future deployment include a Registration and Login component for users.
</p>`)
$(`p.Hells_Spoon`).replaceWith(`<p class="Hells_Spoon reveal">Hell's Spoon is a full-stack social media and recipe-sharing application built using:</br>
<br/>
• MongoDB<br/>
• Express<br/>
• EJS<br/>
• Node<br/> 
<br/>
Inspired from the title of one of Chef Gordon Ramsay's most popular television shows, users are able to register their own accounts to post and share their favorite recipes. Thanks to a few pieces of middleware that have been
integrated into this application, registered users can also upload photos of their own favorite homemade dishes!
</p>
</div>`)
$(`p.WRESTL`).replaceWith(`<p class="WRESTL reveal">A play on the word RESTful API, this React application serves information about televised professional wrestling events in history. 
The backend and frontend are powered using some of the following coding languages and libraries:<br/>
<br/>
• Python<br/>
• Django<br/>
• React<br/>
<br/>

This API details events by promotion (wrestling organization), event year, # of matches, average match 
rating (based on original records from the Wrestling Observer Newsletter), best match (either based on the Wrestling Observer or my own opinion), 
original duration of the show, and any remarkable/historically significant notes from the event. </p>
</div>`)
    $(`#projets`).text(`Projects`)
    $(`#skill`).text(`Skills`)
    $(`#experience`).text(`Experience`)
    $(`#resume`).replaceWith('<p id="resume">To view my resume, <a href="resume_web.pdf" target="_blank"><u>click here</u></a>.</p>')
  })














})
