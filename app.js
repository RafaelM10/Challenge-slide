// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//selecionando itens
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

//selecionando botões
const btnPrev = document.querySelector(".prev-btn");
const btnNext = document.querySelector(".next-btn");
const btnRandom = document.querySelector(".random-btn");

let valueItem = 0;

window.addEventListener("DOMContentLoaded", function(){
  //declarei o objectItem para receber meu array de objeto reviews[o valor 0 do (valueItem)];
  const item = reviews[valueItem];
  //Selecionei a minha imagem e Chamei meu array de objeto pegando o img que tinha dentro do reviews;
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
})


//mostrar pessoas com base no item 
function MostrarPessoa(person){
  console.log()
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

btnNext.addEventListener('click', function(){
  valueItem++ 
  if(valueItem > reviews.length -1){
    valueItem = 0
  }
  return MostrarPessoa(valueItem);
})

btnPrev.addEventListener('click', function(){
  valueItem--
  if(valueItem < 0){
    valueItem = reviews.length - 1;
  }
  return MostrarPessoa(valueItem)
})

btnRandom.addEventListener('click', function(){
  valueItem = Math.floor(Math.random() * reviews.length);
  MostrarPessoa(valueItem);
})