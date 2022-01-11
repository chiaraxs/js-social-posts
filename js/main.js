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
        authorImage: '',
        date: '01/11/2021',
        postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        postImage: 'https://i.picsum.photos/id/924/300/300.jpg?hmac=p45YuBoKzB-EkoHGMxj9apqgEx1xpuuSUUzhKEldxGM',
        likesNumber: 20
    
    },

    {  
        id: 3,
        authorName: 'Ambra Kest',
        authorImage: '',
        date: '04/04/2021',
        postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        postImage: 'https://i.picsum.photos/id/742/300/300.jpg?hmac=3g8utVmYFCNJz0roceHrGIy_9761BtMT7bv7uGgzEiE',
        likesNumber: 168
    
    },

    {  
        id: 4,
        authorName: 'Will Cage',
        authorImage: '',
        date: '10/16/2021',
        postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        postImage: 'https://i.picsum.photos/id/199/300/300.jpg?hmac=WSomwAzN0BulyzX9gcve6rdVDwTe__6SrkvHPxmfc34',
        likesNumber: 234
    
    },

    {  
        id: 5,
        authorName: 'Cindy Looper',
        authorImage: '',
        date: '07/08/2021',
        postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        postImage: 'https://i.picsum.photos/id/738/300/300.jpg?hmac=ZNTq_YjwXyW1vg5D1bZKpImdTfHZqhHTZtY7Anjumjc',
        likesNumber: 25
    
    },
]


// Milestone 2
// Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

// 3. creoo funzione per stampare posts nel container
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
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

