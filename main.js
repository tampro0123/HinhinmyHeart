const noAnswer = document.querySelector(".no-answer")
noAnswer.addEventListener('mouseover', onHoverNo)
function onHoverNo() {
  return noAnswer.innerText = "CÓ"
}
noAnswer.addEventListener('mouseout', onHoverOut)
function onHoverOut() {
  return noAnswer.innerText = "Không"
}