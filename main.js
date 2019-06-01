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

document.querySelector('button').addEventListener('click', function(){
const aleatoire = Math.floor(Math.random() * citation.length);
    const blockquote = document.querySelector('.quotes');
    blockquote.textContent = citation[aleatoire];
    const authors = document.querySelector('.authors');
    authors.textContent = author;
})



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
