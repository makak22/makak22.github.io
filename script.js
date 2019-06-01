const aleatoire = Math.floor(Math.random() * citations.length);
const blockquote = document.querySelector('.quotes');
blockquote.textContent = citations[aleatoire];
/*
document.querySelector('button').addEventListener('click', function(){
const aleatoire = Math.floor(Math.random() * citations.length);
    const blockquote = document.querySelector('.quotes');
    blockquote.textContent = citations[aleatoire];
})  
*/

var shakeEvent = new Shake({threshold: 15});
    shakeEvent.start();
    window.addEventListener('shake', function(){
        const aleatoire = Math.floor(Math.random() * citation.length);
    const blockquote = document.querySelector('.quotes');
    blockquote.textContent = citations[aleatoire];
    }, false);

    //stop listening
    function stopShake(){
        shakeEvent.stop();
    }

    //check if shake is supported or not.
    if(!("ondevicemotion" in window)){alert("Not Supported");}
