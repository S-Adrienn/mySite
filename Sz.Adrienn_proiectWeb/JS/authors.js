window.addEventListener('scroll', fadeInSoonParagraph);

function fadeInSoonParagraph() {
  const soonParagraph = document.getElementById('soon_paragraph');
  const paragraphPosition = soonParagraph.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  if (paragraphPosition < screenPosition) {
    soonParagraph.style.opacity = '1';
  } else {
    soonParagraph.style.opacity = '0';
  }
}