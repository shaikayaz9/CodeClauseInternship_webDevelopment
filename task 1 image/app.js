let aBtn = document.querySelectorAll(".btn-box button");
let aCard = document.querySelectorAll(".img-container .card");

let filterCard = e =>{
	document.querySelector(".active").classList.remove('active');
	e.target.classList.add("active")


  aCard.forEach(card =>{
	card.classList.add("hide");

    
	if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all" ){
		card.classList.remove("hide");
	}

  });

};

aBtn.forEach(button =>{button.addEventListener("click", filterCard)});