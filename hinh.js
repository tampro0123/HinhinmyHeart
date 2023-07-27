const waitMe = document.querySelector(".wait")
waitMe.addEventListener("mouseover", onWait)
function onWait() {
  waitMe.innerText = "Ok anh, tới luôn anh ơi!!"
}
waitMe.addEventListener('mouseout', endWait)
function endWait() {
  return waitMe.innerText = "Đợi em suy nghĩ đã."
}
function getRandomNumber() {
  // Tính phạm vi giá trị
  const min = -412;
  const max = 435;

  // Tính số giá trị trong khoảng
  const range = max - min + 1;

  // Tạo số ngẫu nhiên trong khoảng và làm tròn
  const randomNumber = Math.floor(Math.random() * range) + min;

  return randomNumber;
}
function getRandomNumber1() {
  // Tính phạm vi giá trị
  const min = -500;
  const max = 80;

  // Tính số giá trị trong khoảng
  const range = max - min + 1;

  // Tạo số ngẫu nhiên trong khoảng và làm tròn
  const randomNumber = Math.floor(Math.random() * range) + min;

  return randomNumber;
}
const noWay = document.querySelector('.no')
noWay.addEventListener("mouseover", onNo)
function onNo() {
  console.log(Math.random() * (435 - (-412) + (-412)))
  noWay.style.transform = `translate(${getRandomNumber()}px, ${getRandomNumber1()}px)`
}