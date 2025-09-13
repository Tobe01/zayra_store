export function Navigation(){
  const mainNav = document.querySelector('.js-header-nav')
  .innerHTML += `<div class="main-mobile-nav js-main-mobile-nav">
                    <div class="main-mobile-nav-sub">

                        <div class="centralSearch js-centralSearch">
                        <div class="centralSearch-container">
                        <div class="inputField">
                            <input class="CentralSearch-input" type="search" placeholder="Search for products, brands, or categories">
                            <button class="centralSearchButton"><img src="images/icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></button>
                          </div>
                          <button class="centralSearchButton2 js-searchButton">
                            Cancel
                          </button>
                        </div>
                      </div>

                      <div class="mobile-nav-left">
                        <!-- From Uiverse.io by JulanDeAlb --> 
                          <label class="hamburger">
                            <input class="hamburger-input" type="checkbox">
                            <svg viewBox="0 0 32 32">
                              <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                              <path class="line" d="M7 16 27 16"></path>
                            </svg>
                          </label>
                          <span><h1>ZAYRAH STORE</h1></span>
                      </div>

                      <div class="mobile-right">
                        <a><img src="images/icons/person_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></a>
                        <a><img src="images/icons/favorite_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></a>
                        <a><img src="images/icons/local_mall_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></a>
                      </div>
                    </div>

                    <div class="mobile-searchbar-main js-mobile-input">
                      <div class="mobile-search-bar">
                        <button class="first-button">
                          <img src="images/icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="search icon">
                        </button>
                        <input class="mobile-input js-camera-Search" placeholder="Search for products, brands, or categories">
                        <button class="second-button"><img src="images/icons/photo_camera_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></button>
                      </div>
                    </div>
                </div>
        <div class="top-nav js-navigation">
          <div class="top-nav-items">
            <a>
              <span><p>Contact & FAQs</p></span>
            </a>
            <a>
              <span><p>Delivery</p></span>
            </a>
            <a>
            <span><p>Returns</p></span>
            </a>
            <a>
              <span><p>Track Orders</p></span>
            </a>
            <a>
            <span><p>Share Your Ideas</p></span>
            </a>
            <a>
              <span><p>Gift Cards</p></span>
            </a>
          </div>
        </div>
        
        <div class="middle-nav js-navigation">
          <div class="left js-left-items">
              <span><h1>ZAYRA STORE</h1></span>
              <a><p>WOMEN</p></a>
              <a><p>MEN</p></a>
              <a><p>KIDS</p></a>
              <a><p>SPORT</p></a>
              <a><p>BEAUTY</p></a>
              <a><p>HOME</p></a>
          </div>
          <div class="right">
            <div class="right-sub">
              <div class="right-sub1">
              <span>
                <img src="images/icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="search icon">
                </span>
                <input class="js-search-input" placeholder="Search for products, brands, or ...">
              </div>
              <div class="right-sub-icon">
                <span><img src="images/icons/person_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="login icon"></span>
                <span><img src="images/icons/favorite_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="wishlist"></span>
                <span><img src="images/icons/local_mall_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bottom-nav js-navigation">
          <div class="bottom-sub">
              <div>
                <p>NEW IN</p>
              </div>
              <div>
                <p>CLOTHING</p>
              </div>
              <div>
                <p>SHOES</p>
              </div>
              <div>
                <p>ACCESSORIES</p>
              </div>
              <div>
                <p>SPORT</p>
              </div>
              <div>
                <p>BRANDS</p>
              </div>
              <div>
                <p>DESIGNER</p>
              </div>
              <div>
                <p>RE-ZAYRA</p>
              </div>
              <span>
                <p>SALE</p>
              </span>
          </div>
          </div>
          
          <div class="main-search js-main-search">
            <div class="main-search-container">
              <button class="close-button js-close-button"><img src="images/icons/close_small_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></button>
              <input class="main-search-bar" type="search" placeholder="Search for products, brands, or categories">
              <button class="search-button"><img src="images/icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></button>
            </div>
          </div>
          `

          const searchBar = document.querySelector('.js-search-input');
          const mainSearch = document.querySelector('.js-main-search');
          const closeButton = document.querySelector('.js-close-button');

          searchBar.addEventListener('click', ()=>{
              const currentVisibility = getComputedStyle(mainSearch).visibility;

              searchBar.placeholder = "Search for products, brands, or ca";

              if(currentVisibility === "hidden"){
              setTimeout(()=>{
                mainSearch.style.visibility = "visible";
              }, 500)
              }else{
              mainSearch.style.visibility = "hidden";
              }
            });

          closeButton.addEventListener('click', ()=>{
            const currentVisibility = getComputedStyle(mainSearch).visibility;

            if(currentVisibility === "visible" && searchBar.placeholder === "Search for products, brands, or ca" ){
              mainSearch.style.visibility = "hidden";
              searchBar.placeholder = "Search for products, brands, or ...";
            }else{
              mainSearch.style.visibilty = "visible";
              searchBar.placeholder = "Search for products, brands, or ca";
            }
          })

          window.addEventListener('resize', ()=>{
            const mainSearch = document.querySelector('.js-main-search');
            const sections = document.querySelectorAll('.js-navigation');
            const mobileNav = document.querySelector('.js-main-mobile-nav');
            const central = document.querySelector('.js-centralSearch');
            const centralVisibility = getComputedStyle(central).visibility;
            const currentView = getComputedStyle(mobileNav).visibility;
            const currentVisibility = getComputedStyle(mainSearch).visibility;
            const sectionsVisibility = getComputedStyle(sections[0]).visibility; 
            const width = window.innerWidth;  

            if((width <= 1070 && currentView === "hidden") || (width <= 1070 && centralView === "hidden" && sectionsVisibility === "visible" && currentVisibility === "visible" && centralVisibility === "visible")){
                mobileNav.style.visibility = "visible";
                central.style.visibility = "hidden";
                sections.forEach(section => section.style.visibility = "hidden");
              } else if (width >= 1070 && centralVisibility === "visible") {
                mobileNav.style.visibility = "hidden";
                central.style.visibility = "visible";
                sections.forEach(section => section.style.visibility = "visible");
              }
            })


            // Scripts for Main Search on mobile devices

            const cameraSearch = document.querySelector('.js-camera-Search');
            
            cameraSearch.addEventListener('click', ()=> {
                const sections = document.querySelectorAll('.js-navigation');
                const central = document.querySelector('.js-centralSearch');
                const mobileNav = document.querySelector('.js-main-mobile-nav');
                const centralVisibility = getComputedStyle(central).visibility;
                const currentView = getComputedStyle(mobileNav).visibility;
                const sectionsVisibility = getComputedStyle(sections[0]).visibility; 

                if(centralVisibility === "hidden" && currentView === "visible" && sectionsVisibility === "visible"){
                  central.style.visibility = "visible";
                  mobileNav.style.visibility = "hidden";
                  sections.forEach(section => section.style.visibility = "hidden");
                } else{
                  central.style.visibility = "hidden";
                  mobileNav.style.visibility = "visible";
                  sections.forEach(section => section.style.visibility = "visible");
                }
              });


            const cancelButton = document.querySelector('.js-searchButton');

            cancelButton.addEventListener('click', ()=>{
              const mobileNav = document.querySelector('.js-main-mobile-nav');
              const sections = document.querySelectorAll('.js-navigation');
              const central = document.querySelector('.js-centralSearch');
              const centralVisibility = getComputedStyle(central).visibility;
              const currentView = getComputedStyle(mobileNav).visibility;
              const sectionsVisibility = getComputedStyle(sections[0]).visibility; 

              if(centralVisibility === "visible" && sectionsVisibility === "hidden" && currentView === "hidden"){
                central.style.visibility = "hidden";
                mobileNav.style.visibility = "visible";
                sections.forEach(section => section.style.visibility = "visible");
              } else {
                central.style.visibility = "visible";
                mobileNav.style.visibility = "hidden";
                sections.forEach(section => section.style.visibility = "hidden");
              }
            }) 


}; Navigation();

    document.addEventListener('DOMContentLoaded', ()=> {
      localStorage.getItem(links);
    })

    export const links = document.querySelectorAll('.js-left-items a');
    links.forEach(link =>{
        link.addEventListener('click', ()=>{
        if(getComputedStyle(link).borderBottom === "0px none rgb(0, 0, 0)"){
          link.style.borderBottom = "2px solid white"
        } else{
          link.style.borderBottom = "0px none rgb(0, 0, 0)"
        }
      })
    });

    localStorage.setItem('links', JSON.stringify(links));