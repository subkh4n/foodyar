window.addEventListener('load', () => {
  let featuredFoods = document.querySelectorAll('.bintang');

  let starIcon = document.createElement('i');
  starIcon.classList.add('far', 'fa-star');

  featuredFoods.forEach((el) => {
    el.append(starIcon);
    el.append(starIcon);
    el.append(starIcon);
    el.append(starIcon);
    el.append(starIcon);
  })
});
