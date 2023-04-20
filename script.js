const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



  $.ajax({
    url: 'https://quantoo.pl/jobs/api/swiper/list.json',
    dataType: 'json',
    success: function(data) {
      // Handle the JSON data
      console.log(data.items);

      $(data.items).each(function(index, el){
        console.log(el)
           console.log(el.img)
         
        $('.swiper-wrapper').append(`<div class="swiper-slide"><div class="card "><img src="${el.img}" class="img-card" alt="photo"><div class="d-flex justify-content-center flex-column h-100"><p>${el.id}${el.name}</p><p style="font-size:12px">${el.lead}</p><div></div></div>`)
          
      })

    },
    error: function() {
      // Handle any errors
      console.log('Error: Could not retrieve JSON data.');
    }
  });