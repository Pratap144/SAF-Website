// Change the content here
document.addEventListener("DOMContentLoaded", function () {
  var regDate = document.getElementById("registrationDate");
  var moduleNum = document.getElementById("moduleNumbers");
  var tentativeOne = document.getElementById("tentativeDate01");
  var tentativeTwo = document.getElementById("tentativeDate02");
  var tentativeThree = document.getElementById("tentativeDate03");

  try {
    regDate.innerHTML = REGISTRATION_DATE;
    moduleNum.innerHTML = MODULE_NUMBERS;
    tentativeOne.innerHTML = TENTATIVE_DATE_01;
    tentativeTwo.innerHTML = TENTATIVE_DATE_02;
    tentativeThree.innerHTML = TENTATIVE_DATE_03;
  } catch (err) {
    console.log(err);
  }

  var oneDays = document.querySelectorAll("span.moduleOneDays");
  var twoDays = document.querySelectorAll("span.moduleTwoDays");
  var threeDays = document.querySelectorAll("span.moduleThreeDays");
  var fourDays = document.querySelectorAll("span.moduleFourDays");

  var onePrices = document.querySelectorAll("span.moduleOnePrice");
  var twoPrices = document.querySelectorAll("span.moduleTwoPrice");
  var threePrices = document.querySelectorAll("span.moduleThreePrice");
  var fourPrices = document.querySelectorAll("span.moduleFourPrice");

  try {
    oneDays.forEach(function (oneDay) {
      oneDay.innerHTML = MODULE_01_DAYS;
    });
    twoDays.forEach(function (twoDay) {
      twoDay.innerHTML = MODULE_02_DAYS;
    });
    threeDays.forEach(function (threeDay) {
      threeDay.innerHTML = MODULE_03_DAYS;
    });
    fourDays.forEach(function (fourDay) {
      fourDay.innerHTML = MODULE_04_DAYS;
    });

    onePrices.forEach(function (onePrice) {
      onePrice.innerHTML = MODULE_01_PRICE;
    });
    twoPrices.forEach(function (twoPrice) {
      twoPrice.innerHTML = MODULE_02_PRICE;
    });
    threePrices.forEach(function (threePrice) {
      threePrice.innerHTML = MODULE_03_PRICE;
    });
    fourPrices.forEach(function (fourPrice) {
      fourPrice.innerHTML = MODULE_04_PRICE;
    });
  } catch (err) {
    console.log(err);
  }
});
