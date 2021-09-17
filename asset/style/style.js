window.addEventListener('load', () => {
  let featuredFoods = document.querySelectorAll('.bintang');

  let starIcon = document.createElement('i');
  starIcon.classList.add('fas', 'fa-star');

  featuredFoods.forEach((el) => {
    el.append(starIcon, starIcon, starIcon, starIcon, starIcon);
  })
})
