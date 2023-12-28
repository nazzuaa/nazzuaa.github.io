data = [{
    'img1': 'assets/lip.jpeg',
    'img2': 'asssets/eye.jpeg',
    'title': 'E-Commerce',
    'subtitel': 'Zenit' ,
    'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, repudiandae'

}, {
    'img1': 'assets/lip.jpeg',
    'img2': 'asssets/eye.jpeg',
    'title': 'Web Design',
    'subtitel': 'The Gallery' ,
    'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, repudiandae'
}]

var container = document.querySelector('.container-project')

data.forEach(element => {
    container.innerHTML +=
    ` <div class="project">
    <div class="img-project">
        <img src="${element.img1}" alt="">
        <img src="${element.img2}" alt="">
    </div>
    <div class="desc-project">
        <h1>${element.title}</h1>
        <p>${element.desc}</p>
    </div>
        <button class=" Read-More">Read More</button>
    </div>`

})

