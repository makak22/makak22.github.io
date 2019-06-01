/*const quotes = [{
    citation: 'La priere est une arme qui ne rate jamais sa cible',
    author: 'Unknow'
}, {
    citation: 'God timing is always good',
    author: 'Unknow'}];  */

const citation = ['La priere est une arme qui ne rate jamais sa cible', 'C\'est en forgeant que on devient forgeront'];
let author = 'UNKNOWN';
const aleatoire = Math.floor(Math.random() * citation.length);

const blockquote = document.querySelector('.quotes');
blockquote.textContent = citation[aleatoire];
const authors = document.querySelector('.authors');
authors.textContent = author;
 
/*
document.querySelector('button').addEventListener('click', function(){
const aleatoire = Math.floor(Math.random() * citation.length);
    const blockquote = document.querySelector('.quotes');
    blockquote.textContent = citation[aleatoire];
    const authors = document.querySelector('.authors');
    authors.textContent = author;
})  */

let shakeEvent = new Shake({threshold: 15});
    shakeEvent.start();
    window.addEventListener('shake', function(){
        const aleatoire = Math.floor(Math.random() * citation.length);
    const blockquote = document.querySelector('.quotes');
    blockquote.textContent = citation[aleatoire];
    const authors = document.querySelector('.authors');
    authors.textContent = author;
    }, false);

    //stop listening
    function stopShake(){
        shakeEvent.stop();
    }

    //check if shake is supported or not.
    if(!("ondevicemotion" in window)){alert("Not Supported");}





/* <script type="text/javascript" src="https://cdn.rawgit.com/alexgibson/shake.js/master/shake.js"></script>
<script>  
    //listen to shake event
    var shakeEvent = new Shake({threshold: 15});
    shakeEvent.start();
    window.addEventListener('shake', function(){
        alert("Shaked");
    }, false);

    //stop listening
    function stopShake(){
        shakeEvent.stop();
    }

    //check if shake is supported or not.
    if(!("ondevicemotion" in window)){alert("Not Supported");}
</script> */


/*

const citations = [{
    quote: 'L\'amour rend aveugle',
    author: 'levipi'
}, {
    quote: 'holalala',
    author: 'ben'
}];

citations.forEach(function(cite){
    //console.log(`${cite.quote} of ${cite.author}`)
    document.querySelector('button').addEventListener('click', function(){
        console.log(`${cite.quote} of ${cite.author}`)
    })
    
})
*/
