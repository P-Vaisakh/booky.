// home page animation
const tl = gsap.timeline()
if(window.innerWidth>=768){
     width="10%"
}else{
    width="20%"
}
tl
    .to(".loading", {
        width: width, duration: 1.5, delay: .7, ease: Circ.easeInOut, onComplete: () => {
            let loading = document.querySelector(".loading");
            loading.parentElement.removeChild(loading)
        }
    })
    .from(".hero", { y: "-150%", duration: 1, delay: .2, borderRadius: "50%", ease: Sine.easeOut })
    .from("header", { y: "-100%", duration: .7 })
    .from(".hero-text h1", { y: "70%", opacity: 0, })


// add book to loc storage
let form = document.getElementById("addBookForm")
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let bookName = document.getElementById("book-name").value
    let authorName = document.getElementById("author-name").value
    let categoryName= document.getElementById("category").value
    let coverImg = document.getElementById("cover-image").value
    if (bookName && authorName && coverImg && coverImg) {
        document.getElementById("submit-button").setAttribute("data-bs-dismiss", "modal")
        if (bookName in localStorage) {
            alert("book already exists")
        } else {
            bookData = { "BookName": bookName, "AuthorName": authorName, "category":categoryName ,"CoverImg": coverImg }
            localStorage.setItem(bookName, JSON.stringify(bookData))
            alert("Book Added Succesfully")
        }
    } else {
        alert("Enter all Necessary Feilds")
    }

    form.reset()
})


// change dom to search
function changeDOM() {
    window.location = "./search.html"
}


// book search
function bookSearch() {
    let searchInput = document.getElementById("search").value
    if (searchInput in localStorage) {
        let book = JSON.parse(localStorage.getItem(searchInput))
        console.log(book);
        document.querySelector(".container").innerHTML = `<div class="card">
        <img src=${book.CoverImg} alt="book image" class="cover-img">
        <h3>${book.BookName}</h3>
        <h4>${book.AuthorName}</h4>
        <h4>${book.category}</h4>`    
    }else{
        alert("book not found")
    }
}


// navigation toggle button
let toggleMenu=document.querySelector(".navbar-mobile-view")
let toggleButton=document.querySelector(".header-toggle")
toggleButton.addEventListener("click", function(){
    toggleMenu.classList.toggle("toggle-class")
})


// back home
function backHome(){
    window.location="./index.html"
}