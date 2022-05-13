$(document).ready(function () {

    $(`.javascript`).on("click", function () {
        if (toggleActive = true) {
            $(`#css`).hide()
            $(`#html_`).hide()
            $(`#photoshop`).hide()
            $(`#french`).hide()
            toggleActive = false
        }
        $(`#javascript`).show();
        toggleActive = true;
    })

    $(`.css`).on("click", function () {
        if (toggleActive = true) {
            $(`#javascript`).hide()
            $(`#html_`).hide()
            $(`#photoshop`).hide()
            $(`#french`).hide()
            toggleActive = false
        }
        $(`#css`).show();
        toggleActive = true;
    })

    $(`.html_`).on("click", function () {
        if (toggleActive = true) {
            $(`#javascript`).hide()
            $(`#css`).hide()
            $(`#photoshop`).hide()
            $(`#french`).hide()
            toggleActive = false
        }
        $(`#html_`).show();
        toggleActive = true;
    })

    $(`.photoshop`).on("click", function () {
        if (toggleActive = true) {
            $(`#javascript`).hide()
            $(`#html_`).hide()
            $(`#css`).hide()
            $(`#french`).hide()
            toggleActive = false
        }
        $(`#photoshop`).show();
        toggleActive = true;
    })

    $(`.french`).on("click", function () {
        if (toggleActive = true) {
            $(`#javascript`).hide()
            $(`#html_`).hide()
            $(`#photoshop`).hide()
            $(`#css`).hide()
            toggleActive = false
        }
        $(`#french`).show();
        toggleActive = true;
    })

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
    $(`.bio`).text(`Je suis né á Mobile, AL (qui était la première colonie de la Louisiane-Française avant être acheté par les États-Unis en 1803.) 
    J'étudias á l'Université de South Alabama où je me suis specialisé en deux sujets-- le français et l'art. 
    En 2012, j'avais la chance étudier á l'étranger á l'Université Paul Valery chez Montpellier, France. 
    Après avoir obtenu mon diplôme, j'étais permi dans le programme TAPIF pour être un assistant d'enseigner l'anglais.  
    Lorsqu'il s'est terminé, je me suis rendu aux États-Unis et finalement me trouvé au San Francisco Bay Area où j'habite hereusement depuis ce-temps lá.`);
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
    $(`#welcome`).text(`Bienvenue á mon site web~ :)`)
    $(`#resume`).replaceWith('<p id="resume">Pour voir mon CV, <a href="resume.pdf" target="_blank"><u>cliquer ici</u></a>.</p>')
    $(`#terminal`).text("Des jeux en Terminale")
    }    
})
    

const EN = document.getElementsByClassName("en")
$(EN).click(function(){
french = false;
$(`.bio`).text(`I was born and grew up in Mobile, AL (a former French colony and the first capital of French-Louisiana prior to the aptly-named Louisiana Purchase).
I attended the University of South Alabama where I double-majored in Studio Art and French. In 2012, I was fortunate to study abroad and attended Université Paul Valery in Montpellier, France.
After graduating, I was accepted into the TAPIF program and returned to France as a teaching assistant. Upon finishing the program, I returned to the US and eventually found my way to the SF Bay Area where I have happily lived ever since.`);
$(rufus).attr("src", "images/rufus_closeup2.png")
$(chatBubble).text("Hey buddy, it looks like you want to use my website. Need any help?")
$(`#javascript`).text(`So far in Javascript I've made some terminal games.`)
$(`#css`).text(`This is mostly what I've used to give style to this website. Pretty handy!`)
$(`#html_`).text(`Super useful for building websites!`)
$(`#photoshop`).text(`I've been using Photoshop for over 20 years. I took 2 semesters of it in high school and even had a photo editor position before coming to California.`)
$(`#french`).text(`Communication can sometimes make all the difference. In addition to computer languages-- I can also speak, read, and write in French!`)
$(`#projets`).text(`Projects`)
$(`#skill`).text(`Skills`)
$(`#welcome`).text(`Welcome to my website :)`)
$(`#experience`).text(`Experience`)
$(`#resume`).replaceWith('<p id="resume">To view my resume, <a href="resume.pdf" target="_blank"><u>click here</u></a>.</p>')
$(`#terminal`).text("Terminal Games")
})














})
