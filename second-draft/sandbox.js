const root = document.documentElement

const projects = document.getElementById('projects')

projects.addEventListener('mousemove', e => {
  root.style.setProperty('--mouse-y', e.pageY - projects.offsetTop + 'px')
})

projects.addEventListener('click', e => {
  console.log(e.target)
  if (e.target && e.target.matches('p')) {
    e.target.classList.add('clicked')
  } else {
    return
  }
})

function writeCode(num) {
  let duration = 0.2
  for (let i = 0; i < num; i++) {
    console.log(`li:nth-child(${i + 1}) {animation-delay: ${duration}s;}`)
    duration = duration + 0.1
  }
}

writeCode(10)
