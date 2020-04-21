// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction();
};
window.onload = function () {
  contentloader();
};

function contentloader() {
  for (let i = 1; i < 6; i++) {
    document.getElementById(
      `dummycontent${i}`
    ).innerHTML = ` <div class="sda" id="rrrrr">
  <h2>Designing and developing Websites, Web Applications, Web documentations, mobile app and mobile web app and etc</h2>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, dolor alias laboriosam esse mollitia
    vitae, illo deleniti molestias atque perferendis id quo ipsam possimus nulla modi, error vero? Explicabo,
    aliquam!</p>
  <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officia pariatur qui adipisci eius
    quasi soluta consequatur ullam consectetur omnis sapiente, dolore tempora, fuga est! Quisquam quae quia iusto
    eos!</h2>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, dolor alias laboriosam esse mollitia
    vitae, illo deleniti molestias atque perferendis id quo ipsam possimus nulla modi, error vero? Explicabo,
    aliquam!</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, dolor alias laboriosam esse mollitia
    vitae, illo deleniti molestias atque perferendis id quo ipsam possimus nulla modi, error vero? Explicabo,
    aliquam!</p>
  
  </div>
  <div class="sda" id="sssss">
  <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officia pariatur qui adipisci eius
    quasi soluta consequatur ullam consectetur omnis sapiente, dolore tempora, fuga est! Quisquam quae quia iusto
    eos!</h2>
  <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officia pariatur qui adipisci eius
    quasi soluta consequatur ullam consectetur omnis sapiente, dolore tempora, fuga est! Quisquam quae quia iusto
    eos!</h2>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, dolor alias laboriosam esse mollitia
    vitae, illo deleniti molestias atque perferendis id quo ipsam possimus nulla modi, error vero? Explicabo,
    aliquam!</p>
  <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officia pariatur qui adipisci eius
    quasi soluta consequatur ullam consectetur omnis sapiente, dolore tempora, fuga est! Quisquam quae quia iusto
    eos!</h2>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, dolor alias laboriosam esse mollitia
    vitae, illo deleniti molestias atque perferendis id quo ipsam possimus nulla modi, error vero? Explicabo,
    aliquam!</p>
  
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, dolor alias laboriosam esse mollitia
    vitae, illo deleniti molestias atque perferendis id quo ipsam possimus nulla modi, error vero? Explicabo,
    aliquam!</p>
  
  </div>
  <div class="sda" id="rrrrr">
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, dolor alias laboriosam esse mollitia
    vitae, illo deleniti molestias atque perferendis id quo ipsam possimus nulla modi, error vero? Explicabo,
    aliquam!</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, dolor alias laboriosam esse mollitia
    vitae, illo deleniti molestias atque perferendis id quo ipsam possimus nulla modi, error vero? Explicabo,
    aliquam!</p>
  <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officia pariatur qui adipisci eius
    quasi soluta consequatur ullam consectetur omnis sapiente, dolore tempora, fuga est! Quisquam quae quia iusto
    eos!</h2>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, dolor alias laboriosam esse mollitia
    vitae, illo deleniti molestias atque perferendis id quo ipsam possimus nulla modi, error vero? Explicabo,
    aliquam!</p>
  
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, dolor alias laboriosam esse mollitia
    vitae, illo deleniti molestias atque perferendis id quo ipsam possimus nulla modi, error vero? Explicabo,
    aliquam!</p>
  
  </div>
  <footer>
  <div class="footer">
    <div class="infoFooter">
      <div class="address-container">
      <p>Address :<br>Iran,Tehran,WEngh St.</p></div>
      <div class="phonenumber-container">
      <p>phone number : <br>+21xxxxxxx</p></div>
    </div>
    <div class="logoFooter">
      <h1 class="logoFoot">Future Tech</h1>
    </div>
  </div>
  <p class="footerLegal">all legals reserved by ^Mojyseo</p>
</footer>

<!-- STAR ANIMATION -->
<div class="bg-animation">
  <div id='stars'></div>
  <div id='stars2'></div>
  <div id='stars3'></div>
  <div id='stars4'></div>
</div><!-- / STAR ANIMATION -->
  
  `;
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    for (i = 1; i < 6; i++) {
      document.getElementById("mn" + i).style.padding = ".5em .25em";
    }
    document.getElementById("logoNav").style.fontSize = "1.8em";
    document.getElementById("navBar").style.backgroundColor = "#292929";
    document.getElementById("searchbtn").style.display = "none";
    document.getElementById("navBar").style.marginTop = "0";
  } else {
    for (i = 1; i < 6; i++) {
      document.getElementById("mn" + i).style.padding = "1.6em 0.25em";
      document.getElementById("mn" + i).style.fontSize = "1.2em";
    }
    document.getElementById("logoNav").style.fontSize = "5vh";
    document.getElementById("navBar").style.backgroundColor = "transparent";
    document.getElementById("searchbtn").style.display = "block";
    document.getElementById("navBar").style.marginTop = "15px";
  }
}

//this is for fulltab menu
function openPage(pageName, b, elmnt, color, a) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderBottom = "none";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
  document.getElementById(b).style.borderBottom = "3px solid #fff";

  // Add the specific color to the button used to open the tab content
  document.getElementById("startPage").style.background = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("mn1").click();

function taketop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* function search() {
  document.getElementById("searchbtn").style.height = "5vh"
} */

/* side navbar */
function openNav() {
  document.getElementById("mySidenav").classList.toggle("sidenav-hide");
  document.getElementById("ham").classList.toggle("ham-hide");
}

function closeNav() {
  document.getElementById("mySidenav").classList.toggle("sidenav-hide");
  document.getElementById("ham").classList.toggle("ham-hide");
}
