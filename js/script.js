const scrollHeader = () =>{
    const header = document.getElementById('navbar')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 100 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)
