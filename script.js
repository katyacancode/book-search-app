const searchInput = document.querySelector("#search");

const books = document.querySelectorAll(".book");

searchInput.addEventListener("keyup", function(event) {
    const word = event.target.value.toLowerCase(); 
    books.forEach(item => {
    item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display="block") : (item.style.display="none");
})
})

gsap.from("#heading", {duration: 4, y: -100, scale: 0.5, ease: "back", delay: 1})  
gsap.from(".input-field", {opacity: 0.25, duration: 2, delay: 2})
gsap.from(".book", {opacity: 0, duration: 3, delay: 3, stagger: 0.25})




