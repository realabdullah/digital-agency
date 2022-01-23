var slideIndex = 1;
showCard(slideIndex)

function plusPort(n) {
  showCard(slideIndex += n)
}

function showCard(n) {
  var i
  var portfolio = document.querySelectorAll('.portfolio')
  if (n > portfolio.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = portfolio.length
  }
  for (i = 0; i < portfolio.length; i++) {
    portfolio[i].style.display = "none"; 
  }
  portfolio[slideIndex-1].style.display = "block"; 
}