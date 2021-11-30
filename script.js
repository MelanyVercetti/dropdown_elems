const open_close_btns = document.querySelectorAll('.open-close');

open_close_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active')
    })
})