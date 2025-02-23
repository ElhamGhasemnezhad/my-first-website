function Show() {
    var x = document.getElementById("form-menu");
    if (x.style.display == "flex") {
      x.style.display = "none";
      return;
    }
    x.style.display = "flex";
}

  function burger() {
    let secndNave=document.querySelector(".second-nav-menu ul");
    secndNave.classList.toggle("show")
    console.log(secndNave);
}
  
//   let navItems=document.querySelectorAll(".nav-item");
//     for (let index = 0; index < navItems.length; index++) {
//              navItems[index].addEventListener('click',()=>{
//               navItems[index].classList.toggle('view')
//              })
// }

document.querySelectorAll('.nav-item > a').forEach(item => {
  item.addEventListener('click', function(e) {
    const parentItem = this.parentElement;
    
    // بستن همه زیرمنوها قبل از باز کردن زیرمنوی جدید
    document.querySelectorAll('.nav-item').forEach(navItem => {
      if (navItem !== parentItem) {
        navItem.classList.remove('active');

      }
    });
    
    // فعال کردن یا غیرفعال کردن زیرمنوی جاری
    parentItem.classList.toggle('active');
    
    e.preventDefault();  // جلوگیری از هدایت به لینک
  });
});
// تابعی برای اسکرول دادن به منو
function scrollMenu(direction) {
  const menu = document.querySelector('.third-header-menu-container .nav-list-menu');
  console.log(menu);
  
  const scrollAmount = 30; // مقدار اسکرول (می‌توانید این مقدار را تغییر دهید)

  if (direction === 'left') {
  console.log('left');
    menu.scrollBy({ left: -30, behavior: 'smooth' });
  } else if (direction === 'right') {
    console.log('right');
    menu.scrollBy({ left: 30, behavior: 'smooth' });
  }
}
scrollMenu('right')

// افزودن EventListener به دکمه‌ها
document.querySelector('.left-btn').addEventListener('click', function() {
  
  scrollMenu('left');
});

document.querySelector('.right-btn').addEventListener('click', function() {
  scrollMenu('right');

});




