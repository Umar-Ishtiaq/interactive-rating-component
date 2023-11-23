const value = document.querySelectorAll('.btn')

function disResult() {
    const x = document.getElementById('rate')
    const y = document.getElementById('result')

    x.style.display = 'none'
    y.style.display = 'block'
}

value.forEach((val)=>{
    val.addEventListener('click', ()=>{
        const d = document.getElementById('ratingVal')
        d.innerHTML = val.innerHTML
    })
})