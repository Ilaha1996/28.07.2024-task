let gitInput = document.getElementById("input");
let findBtn = document.getElementById("Findbtn");
let divCard = document.getElementById("div");

const myURL = "https://fakestoreapi.com/products/";

findBtn.addEventListener("click", function(e){
    e.preventDefault();
     fetch(myURL+gitInput.value)
     .then((data)=> data.json())
     .then((data) =>

     (divCard.innerHTML=`<img src="${data.image}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">Price: ${data.price}</h5>
       <p class="card-text">Description: ${data.description}</p>
     </div>
     <ul class="list-group list-group-flush">
       <li class="list-group-item">Category: ${data.category}</li>
       <li class="list-group-item">Title: ${data.title}</li>
       <li class="list-group-item">Rate: ${data.rate}</li>
     </ul>
     <div class="card-body">
       <a href="#" class="card-link">Card link</a>
       <a href="#" class="card-link">Another link</a>
     </div>`)
     );
});

