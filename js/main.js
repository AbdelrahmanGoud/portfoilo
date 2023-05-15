$(".nav-link").click( function(){

   let selectsection=$(this).attr("href")
   
   let mytop=$(selectsection).offset().top
   $("html,body").animate({scrollTop : mytop } , 1000)
   
   } )
   /*  <span class="divicon"><i class="fas fa-anchor fa-2x bg-dark text-white  border border-white rounded-circle p-2 position-absolute"></i></span>
*/