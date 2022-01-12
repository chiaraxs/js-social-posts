// Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// id del post (numero progressivo da 1 a n)
// nome autore,
// foto autore,
// data in formato americano (mm-gg-yyyy),
// testo del post,
// immagine (non tutti i post devono avere una immagine),
// numero di likes.


// 1. aggancio l'html per stampa
const postList = document.querySelector('.posts-list');


// 2. creo array di oggetti: 'posts'
const posts = [
    {
        id: 1,
        authorName: 'Phil Mangione',
        authorImage: 'https://unsplash.it/300/300?image=15',
        date: '4 mesi fa',
        postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        postImage: 'https://unsplash.it/600/300?image=171',
        likesNumber: 80
    },
    
    {  
        id: 2,
        authorName: 'Jayne Lowest',
        authorImage: 'https://unsplash.it/300/300?image=21',
        date: '01/11/2021',
        postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        postImage: 'https://unsplash.it/600/300?image=101',
        likesNumber: 20
    
    },

    {  
        id: 3,
        authorName: 'Ambra Kest',
        authorImage: 'https://unsplash.it/300/300?image=67',
        date: '04/04/2021',
        postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        postImage: 'https://unsplash.it/600/300?image=15',
        likesNumber: 168
    
    },

    {  
        id: 4,
        authorName: 'Will Cage',
        authorImage: 'https://unsplash.it/300/300?image=90',
        date: '10/16/2021',
        postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        postImage: 'https://unsplash.it/600/300?image=456',
        likesNumber: 234
    
    },

    {  
        id: 5,
        authorName: 'Cindy Looper',
        authorImage: 'https://unsplash.it/300/300?image=123',
        date: '07/08/2021',
        postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        postImage: 'https://unsplash.it/600/300?image=675',
        likesNumber: 25
    
    },
]


// Milestone 2
// Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

// 3. creo funzione per stampare posts nel container
function printPost (container, card) {
    
    container.innerHTML += `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${card.authorImage}" alt="">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${card.authorName}</div>
                    <div class="post-meta__time">${card.date}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${card.postText}</div>
            <div class="post__image">
                <img src="${card.postImage}" alt="">
            </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${card.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${card.likesNumber}</b> persone
                </div>
            </div> 
        </div>            
    </div>`;
}
    
// 4. ciclo for per navigare nell'array
for (let i = 0; i < posts.length; i++){
    
    const card = posts[i]; // costante che mi permette di indiduare [i] corrente mentre il for cicla

    printPost (postList, card) // richiamo funzione per stampare tutte le cards
} 




// Milestone 3
// Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

// BONUS
// Formattare le date in formato italiano (gg/mm/aaaa)
// Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente (es. Luca Formicola > LF).
// Al click su un pulsante “Mi Piace” di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone. -> DONE


// 5. aggancio il js-like-button e creo ciclo for per tutti i buttons
// aggiungo evento al click -> change text color
const likesButtons = document.querySelectorAll('.js-like-button'); // n.b. -> querySelectorAll seleziona/raggruppa tutti i buttons (altrimenti prendeva solo il primo)
const likesContainers = document.querySelectorAll('.js-likes-counter'); // n.b. vedi sopra


for (let i = 0; i < likesButtons.length; i++) {
    likesButtons[i].addEventListener('click', function(e){
        
        e.preventDefault(); // evita che i post risalgano in page dopo il like -> https://www.w3schools.com/jsref/event_preventdefault.asp

        if (likesButtons[i].classList.contains('like-button--liked')){
            this.classList.remove('like-button--liked');
            posts[i].likesNumber--; // decremento likes

        } else {
            this.classList.add('like-button--liked');
            posts[i].likesNumber++; // incremento likes
        }

        likesContainers[i].innerHTML = posts[i].likesNumber;
})
}

// // lettura semantica dal ciclo for poco sopra ->
// scateno l'evento al click : 
// se -> nel button corrente [i] è contenuta già la class 'like-button-liked' -> allora rimuovi la classe 'like-button' (aka 'non mi piace') ->
// i likesNumber contenuti nell'array di oggetti decrementano

// altrimenti -> aggiungi la classe 'liked-button-liked' (aka 'mi piace') ->
// i likesNumber contenuti nell'array di oggetti incrementano

// nel likesContainer [i], ossia quello corrente al click, stampa con la proprietà innerHtml il valore di likesNumber 
// (che vengono incrementati o decrementati dall'if/else) modificando IL VALORE dell'oggetto likesNumber nell'array di oggetti 'posts'
// -> quindi mi permette di mantenere sincronizzato il valore del numero di like con quello salvato nell’oggetto
