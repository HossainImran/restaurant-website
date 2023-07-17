const toggleBtn1 = document.querySelector('.toggle__btn')
const toggleBtn2 = document.querySelector('.toggle__btn2')

toggleBtn1.addEventListener('click', () => {
    document.querySelector('.dropdown__menu').style.display = 'flex'
    document.body.style.overflow = 'hidden'
})

toggleBtn2.addEventListener('click', () => {
    document.querySelector('.dropdown__menu').style.display = 'none'
    document.body.style.overflow = 'auto'
})