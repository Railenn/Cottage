
const relationInfo = document.querySelectorAll(".relation-info");
const relationInputs = document.querySelectorAll('.relation__input');



const relationImgs = document.querySelectorAll('.relation__img')
const relationTexts = document.querySelectorAll('.relation__text')


let relationImgSizeH = relationImgs[0].style.height;
let relationImgSizeW = relationImgs[0].style.width;



let transition = {

	smoothness: 0.3,

	delay: 0
}; 



relationInfo[0].style.transition = `${transition.smoothness}s ease ${transition.delay}s`;
relationInfo[1].style.transition = `${transition.smoothness}s ease ${transition.delay}s`;

const relation = document.querySelectorAll('.relation');

for (let index = 0; index < relationImgs.length; index++){
	let relationImg = relationImgs[index];
	relationImg.style.transition = `${transition.smoothness}s ease ${transition.delay}s`;
}

for (let index = 0; index < relationTexts.length; index++){
	let relationText = relationTexts[index];
	relationText.style.transition = `${transition.smoothness}s ease ${transition.delay}s`;
}



for (let index = 0; index < relationInputs.length; index++){
	let relationInput = relationInputs[index];
	relationInput.style.transition = `${transition.smoothness}s ease ${transition.delay}s`;
}



let permit;




let imageSizeDecreaseLess = '20px';
let imageSizeIncreaseLess = '25px';

let textSizeDecreaseLess = '10px';
let textSizeIncreaseLess = '14px';



let imageSizeDecreaseMore = '1.6vw';
let imageSizeIncreaseMore = '2vw';

let textSizeDecreaseMore = '0.9vw';
let textSizeIncreaseMore = '1.04vw';



let paddingMore = "0.62vw 0 4.22vw 0";
let paddingLess = "6px 0 35px 0";





function relationInputsSet(part){
	relationInfo[part].style.padding = paddingLess;

	if (window.innerWidth < 992) {
	

		relationImgs[part].style.width = imageSizeDecreaseLess;
		relationImgs[part].style.height = imageSizeDecreaseLess;
		relationTexts[part].style.fontSize = textSizeDecreaseLess;
	}


	if (window.innerWidth > 991) {



		relationImgs[part].style.width = imageSizeDecreaseMore;
		relationImgs[part].style.height = imageSizeDecreaseMore;
		relationTexts[part].style.fontSize = textSizeDecreaseMore;
	}



	setTimeout(function(){
		relationInputs[part].style.zIndex = '3';
		relationInputs[part].style.opacity = "1";
		permit = true;
		for (let index = 0; index < relation.length; index++){
			let relat = relation[index];
			relat.classList.add('relation_active');
		}
	}, `${transition.smoothness * 1250}`)
}

relation[0].addEventListener('click', function(){
	permit = false;
	relationInputsSet(0)
})

relation[1].addEventListener('click', function(){
	permit = false;
	relationInputsSet(1)
})

window.addEventListener("click", function(e){




	if (permit){
		if ( !(e.target.classList.contains('relation') ) ) {
			if (relationInfo[0].style.padding = paddingLess){
				if ( !(relationInputs[0].value) ){
					relationInputsReset(0)
				}
			}
			if (relationInfo[1].style.padding = paddingLess){
				if ( !(relationInputs[1].value) ){
					relationInputsReset(1)
				}
			}
		}
	}
})





function relationInputsReset(part)
{

	if (window.innerWidth < 992){
			

		relationImgs[part].style.width = imageSizeIncreaseLess;
		relationImgs[part].style.height = imageSizeIncreaseLess;
		relationTexts[part].style.fontSize = textSizeIncreaseLess;
	
	}

	if (window.innerWidth > 991){
	

		relationImgs[part].style.width = imageSizeIncreaseMore;
		relationImgs[part].style.height = imageSizeIncreaseMore;
		relationTexts[part].style.fontSize = textSizeIncreaseMore;
	
	}

	relationInfo[part].style.padding = '20px 0';
	relationInputs[part].style.zIndex = '1';
	relationInputs[part].style.opacity = "0";
	for (let index = 0; index < relation.length; index++){
		let relat = relation[index];
		relat.classList.remove('relation_active');
	}
}












const burgerItem = document.querySelector(".header__burger");
const burger = document.querySelector(".burger");
const burgerClose = document.querySelector(".burger__close")


const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");


burgerItem.addEventListener("click", function() {

	burger.style.display = "block";

	header.style.display = "none";
	main.style.display = "none";
	footer.style.display = "none";

})

burgerClose.addEventListener("click", closeBurger)


function closeBurger() {



	burger.style.display = "none";

	header.style.display = "block";
	main.style.display = "block";
	footer.style.display = "block"



}



window.addEventListener("resize", function() {



	if (window.innerWidth > 475 && burger.style.display == "block") {

		closeBurger();

	}



})



const about = document.querySelector(".main__about");
const locate = document.querySelector(".main__locate");
const advantage = document.querySelector(".main__advantage");
const nura = document.querySelector(".main__nura");
const techno = document.querySelector(".main__techno")
const pay = document.querySelector(".main__pay");
const contact = document.querySelector(".main__contact");

const aboutLinks = document.querySelectorAll(".about");
const locateLinks = document.querySelectorAll(".locate");
const advantageLinks = document.querySelectorAll(".advantage");
const nuraLinks = document.querySelectorAll(".nura");
const technoLinks = document.querySelectorAll(".techno")
const payLinks = document.querySelectorAll(".pay");
const contactLinks = document.querySelectorAll(".contact");
const startLinks = document.querySelectorAll(".start")



for (let index = 0; index < aboutLinks.length; index++){
	const aboutLink = aboutLinks[index];
	aboutLink.addEventListener("click", function() {
		scroll(about);
	})
}



for (let index = 0; index < locateLinks.length; index++){
	const locateLink = locateLinks[index];
	locateLink.addEventListener("click", function() {
		scroll(locate);
	})
}


for (let index = 0; index < advantageLinks.length; index++){
	const advantageLink = advantageLinks[index];
	advantageLink.addEventListener("click", function() {
		scroll(advantage);
	})
}


for (let index = 0; index < nuraLinks.length; index++){
	const nuraLink = nuraLinks[index];
	nuraLink.addEventListener("click", function() {
		scroll(nura);
	})
}


for (let index = 0; index < technoLinks.length; index++){
	const technoLink = technoLinks[index];
	technoLink.addEventListener("click", function() {
		scroll(techno);
	})
}


for (let index = 0; index < payLinks.length; index++){
	const payLink = payLinks[index];
	payLink.addEventListener("click", function() {
		scroll(pay);
	})
}


for (let index = 0; index < contactLinks.length; index++){
	const contactLink = contactLinks[index];
	contactLink.addEventListener("click", function() {
		scroll(contact);
	})
}


for (let index = 0; index < startLinks.length; index++){
	const startLink = startLinks[index];
	startLink.addEventListener("click", function() {
		scroll(header);
	})
}








function scroll(block){







	if (burger.style.display == "block"){

		closeBurger();

	}







	setTimeout(function(){

		
		if (window.innerWidth > block.getBoundingClientRect().top || window.innerWidth == block.getBoundingClientRect().top) {
	
			block.scrollIntoView({
			
				block: 'center'

			})

	
		}







		if (window.innerWidth < block.getBoundingClientRect().top) {
	

			window.scrollTo({
		
				top: block.getBoundingClientRect().top,
				left: 0
		
			})
	

		}

	}, 150)



}






























