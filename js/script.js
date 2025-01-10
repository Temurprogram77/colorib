const scrollHeader = () =>{
    const header = document.getElementById('navbar')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 100 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

let inp = document.querySelector('#search-inp')
let search_modal = document.querySelector('.search-modal') 
let close_btn = document.querySelector('.close_btn') 

inp.addEventListener('click', ()=>{
    search_modal.classList.remove('hidden')
    setTimeout(()=>{
        search_modal.classList.add('translate-y-4')
    },50)
})

close_btn.addEventListener('click', ()=>{
    search_modal.classList.remove('translate-y-4')
    setTimeout(()=>{
        search_modal.classList.add('hidden')
    },100)
})