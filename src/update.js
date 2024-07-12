// Change the content here
document.addEventListener("DOMContentLoaded", function () {
  var regDate = document.getElementById("registrationDate");
  regDate.innerHTML = REGISTRATION_DATE;

  var moduleNum = document.getElementById("moduleNumbers");
  moduleNum.innerHTML = MODULE_NUMBERS;

  var tentativeOne = document.getElementById("tentativeDate01");
  tentativeOne.innerHTML = TENTATIVE_DATE_01;

  var tentativeTwo = document.getElementById("tentativeDate02");
  tentativeTwo.innerHTML = TENTATIVE_DATE_02;

  var tentativeThree = document.getElementById("tentativeDate03");
  tentativeThree.innerHTML = TENTATIVE_DATE_03;
});
