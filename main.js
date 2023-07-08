const menushort = document.querySelector('.desktop-menu')
const navbaremail = document.querySelector('.navbar-email')

navbaremail.addEventListener('click', toggleMenuShort)

function toggleMenuShort() {
    menushort.classList.toggle('inactive')
}