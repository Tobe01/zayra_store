export function menWomenView(){
  const typeBtn = document.querySelector('.js-typeBtn').addEventListener('click', ()=>{
    const menWomen = document.querySelector('.js-menWomen-sub');
    const menWomenVisibility = getComputedStyle(menWomen).visibility;

    if(menWomenVisibility === "hidden"){
      menWomen.style.visibility = "visible"
    } else {
      menWomen.style.visibility = "hidden";
    }
  })
}


