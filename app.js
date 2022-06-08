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
    $(FR).click(function(){
    french = true;
    if (french === true){
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
    $(chatBubble).text("Coucou mon pôte, est-ce que vous avez besoin d'assistance pour naviguer mon site?")
    $(`#javascript`).text(`J'ai programmé des jeux en text`)
    $(`#css`).text(`C'est comment je peux styliser le site! Quel chic!`)
    $(`#html_`).text(`HTML, c'est le code principal pour créer les sites web!`)
    $(`#photoshop`).text(`Je fais du Adobe Photoshop pour 20+ ans, en fait je travaillais comme "photo editor" avant avoir demenagé en Californie`)
    $(`#french`).text(`Le capacité de communiquer soit très important! À part des langues informatique, j'utilise deux langues humaines aussi-- le français et l'anglais.`)
    $(`#projets`).text(`Projets`)
    $(`#experience`).text(`Expérience`)
    $(`#skill`).text(`Competences`)
    $(`#about`).replaceWith(`<p id="about">Je suis un ingénieur-conseil en informatique qui possede des experiences en Javascript, React, HTML5, jQuery, CSS, et des environnement dorsal en utilisant le Python, Django, Express, REST APIs, MongoDB, et SQL. 
    <br/>
    <br/>
    Avant d'être devenu un ingénieur-conseil, je me specialisais aux beaux-arts et le français-- ceux les deux continuent me soutenier comme je les intègre à ma vie du coding. 
    <br/>
    <br/>
    J'espère me trouver en travaillant pour une entreprise qui partage mes valeurs en paix, le traitement respecteux aux animaux, et préserver le climat habitable de notre monde.
    <br/>
    <br/>
   <a id="resume" target="_blank" href="/POST-BOOTCAMP/new_site/resume_web.pdf">Cliquez ici</a></p>`)
    $(`#resume`).replaceWith('<p id="resume">Pour voir mon CV, <a href="resume.pdf" target="_blank"><u>cliquer ici</u></a>.</p>')
    $(`#terminal`).text("Des jeux en Terminale")
    }    
})
    

const EN = document.getElementsByClassName("en")
$(EN).click(function(){
french = false;
$(`#about`).replaceWith(`<p id="about">I'm a software engineer with experience in Javascript, React, HTML5, jQuery, CSS, and backend frameworks using Python, Django, Express, REST APIs, MongoDB, and SQL. 
<br/>
<br/>
Prior to becoming a software engineer, my background was in Art and French which has been fun to incorporate into my coding life. 
<br/>
<br/>
That said, I hope to lend my skills and offer creative solutions for companies that share my values in peace, treating animals with respect, and preserving our planet's habitable climate.
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
$(`#projets`).text(`Projects`)
$(`#skill`).text(`Skills`)
$(`#welcome`).text(`Welcome to my website :)`)
$(`#experience`).text(`Experience`)
$(`#resume`).replaceWith('<p id="resume">To view my resume, <a href="resume.pdf" target="_blank"><u>click here</u></a>.</p>')
})














})
