export function loaderEffect(){
  window.addEventListener('load', ()=>{
      setTimeout(()=>{
       document.querySelector('.js-loader').style.display = "none";
      }, 1500)
    })
  }