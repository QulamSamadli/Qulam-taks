// 5 eded sekil olsun. Hemin sekillerin src-u olan massiv yaradin. 
let imgs = document.getElementById(`images`)

const images=[  "./img/alion_afro.jpg", "../0images/alion_afro.jpg", "../0images/alion_afro.jpg", "../0images/alion_afro.jpg"  ]

const randomIndex=Math.floor( Math.random()*images.length)

images.src = images[randomIndex]

