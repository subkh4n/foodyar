window.addEventListener('load', () => {
  let featured_foods = document.querySelectorAll('.bintang');

  featured_foods.forEach((el) => {
    for(let i = 0; i < 5; i++){
      let star_icon = document.createElement('i');
      star_icon.classList.add('fas', 'fa-star');

       el.append(star_icon);
    }
  });
});
