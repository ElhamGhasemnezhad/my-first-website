/* یک فانکشن تعریف شده برای اینکه  در نوبار اول در قسمت ورود و عضویت  با کلیک کردن بر روی دکمه اگر 
وردی ها نمایش داده شدن با کلیک روی دکمه نمایش داده نشود و منو بسته شود وگر منو بسته بود  دیسپلی 
ان تغییر کند و به صورت زیر هم نمایش داده شوند*/
function Show() {
  var x = document.getElementById("form-menu");
  if (x.style.display == "flex") {
    x.style.display = "none";
    return;
  }
  x.style.display = "flex";
}

 /*  فانکش برگر برای دکمه برگر منو استفاده شده  برا اینکه  هر وقت روی دکمه کلیک شد
 این فانکشن فراخوانی شود  و منو های ما در حالت عادی به صورت مخفی هستن 
 با کلیک کردن روی این دکمه این فانکش فراخوانی میشود وبه لیست منو های ما کلاس شو را اضافه میکند 
و منوها ظاهر میشوند اگر منو ها باز بودن با کلیک دوباره روی دکمه کلاس شو را از ان میگیرد و دیسپلی مجدد مقدارش
noneمیشود
و منو بسته میشود
*/
function burger() {
  let secndNave=document.querySelector(".second-nav-menu ul");
  secndNave.classList.toggle("show")
  console.log(secndNave);
}

/*برای نمایش و عدم نمایش زیر منو ها در برگر منو می باشد
 می اید زیرمنو ها را به صورت یه لیست میگیرد روی  لیست مورد نظر حلقه 
 میزند به هر ایتم لیست ایونت کلیک  داده میشود ک با کلیک ری ان فانکشن ای فراخوانی میشود 
 */
document.querySelectorAll('.nav-item > a').forEach(item => {  
  item.addEventListener('click', function(e) { 
  /*تگ a
  به عنوان وردی فانکشن در نظر گرفته میشود که می اید المنت پدر ان را میگیرد در یک متغییر نگه داری میکند*/
    const parentItem = this.parentElement;
 /*یک لیست میگیرد ازایتم های منو _ یک حلقه روی ان میزند روی هر ایتم چک میکند ک المنت پدر اگر مخالف خودش  بود 
    کلاس اکتیو گرفته میشود*/
    document.querySelectorAll('.nav-item').forEach(navItem => {
      if (navItem !== parentItem) {
        navItem.classList.remove('active');
      }
    });
    /* کلاس اکتیو را تاگل میکند*/
    parentItem.classList.toggle('active');
    e.preventDefault(); 
  });
});
//  تابعی برای اسکرول دادن به منو
   
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




