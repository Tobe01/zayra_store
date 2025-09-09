export function Navigation(){

  const nav = document.querySelector('.js-header-nav')
  .innerHTML = `<div class="top-nav">
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
        
        <div class="middle-nav">
          <div class="left">
              <span><h1>ZAYRA STORE</h1></span>
              <div><p>WOMEN</p></div>
              <div><p>MEN</p></div>
              <div><p>KIDS</p></div>
              <div><p>SPORT</p></div>
              <div><p>BEAUTY</p></div>
              <div><p>HOME</p></div>
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
        
        <div class="bottom-nav">
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
          </div>`


          const searchBar = document.querySelector('.js-search-input');

          searchBar.addEventListener('click', ()=>{
            if (searchBar.placeholder === "Search for products, brands, or ..."){
              searchBar.placeholder = "Search for products, brands, or ca"
            } else {
              searchBar.placeholder = "Search for products, brands, or ca"
            }
          });
}; Navigation();