window.addEventListener('load', () => {
  let featured_foods = document.getElementsByClassName('featured_foods');

  let star_icon = document.createElement('i');
  star_icon.classList.add('far fa-star');

  featured_foods.forEach((el) => {
      el.append(star_icon, star_icon, star_icon, star_icon, star_icon);
  })
})