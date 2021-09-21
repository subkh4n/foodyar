let featuredFoods = document.querySelectorAll('.bintang');

const starIcon = '<i class="fa fa-star"></i>';

featuredFoods.forEach(el => {
  const stars = new Array(5).fill(starIcon).join('');
  el.innerHTML = stars;
});