let btn = document.querySelectorAll('button')
let span = document.querySelectorAll('span')
btn.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    if (i == 0) {
      span.forEach(item => {
        item.innerHTML = +item.innerHTML + 1
      })
    } else if (i == 1) {
      span.forEach(item => {
        item.innerHTML = +item.innerHTML - 1
      })
    } else if (i % 2 == 0) {
      item.parentElement.parentElement.querySelector('span').innerHTML = +item.parentElement.parentElement.querySelector('span').innerHTML + 1
    }
    else {
      item.parentElement.parentElement.querySelector('span').innerHTML = +item.parentElement.parentElement.querySelector('span').innerHTML - 1
    }
  })
})
