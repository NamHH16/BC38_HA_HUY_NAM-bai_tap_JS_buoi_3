//Bài 1: Quản lý tuyển sinh

function resultCheck() {
  //INPUT: lấy thông tin người dùng nhập vào
  var referenceScore = document.getElementById("referenceScore").value * 1;
  var area = document.getElementById("area").value * 1;
  var target = document.getElementById("target").value * 1;
  var subject_1 = document.getElementById("subject_1").value * 1;
  var subject_2 = document.getElementById("subject_2").value * 1;
  var subject_3 = document.getElementById("subject_3").value * 1;
  var sum = area + target + subject_1 + subject_2 + subject_3;
  var content = "";

  //PROCESS

  if (subject_1 === 0 || subject_2 === 0 || subject_3 === 0) {
    content = "Bạn đã rớt";
  } else if (sum >= referenceScore) {
    content = "Chúc mừng bạn đã đậu. Tổng điểm của bạn là " + sum;
  } else {
    content = "Bạn đã rớt. Tổng điểm của bạn là " + sum;
  }

  //OUTPUT
  document.getElementById("divInfo1").innerHTML = content;
  document.getElementById("divInfo1").classList.add("info");
}

//Bài 2: Tính tiền điện

function electricBill() {
  var customerName = document.getElementById("customerName").value;
  var usedNumber = document.getElementById("usedNumber").value;
  var payment = "";
  var content = "";

  if (usedNumber <= 50) {
    payment = usedNumber * 500;
  } else if (usedNumber <= 100) {
    payment = 50 * 500 + (usedNumber - 50) * 650;
  } else if (usedNumber <= 200) {
    payment = 50 * 500 + 50 * 650 + (usedNumber - 100) * 850;
  } else if (usedNumber <= 350) {
    payment = 50 * 500 + 50 * 650 + 100 * 850 + (usedNumber - 200) * 1100;
  } else {
    payment =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (usedNumber - 350) * 1300;
  }

  payment = payment.toLocaleString();
  content =
    "Họ Tên: " + customerName + " - Tiền điện tháng này là: " + payment + "đ";
  document.getElementById("divInfo2").innerHTML = content;
  document.getElementById("divInfo2").classList.add("info");
}

//Bài 3: Tính thuế thu nhập cá nhân

function taxFee() {
  var fullName = document.getElementById("fullName").value;
  var incomePerYear = document.getElementById("incomePerYear").value * 1;
  var familyMember = document.getElementById("familyMember").value * 1;
  var taxibleIncome = incomePerYear - 4e6 - familyMember * 16e5;
  var content = "";

  if (taxibleIncome <= 60e6) {
    incomeTaxes = taxibleIncome * 0.05;
  } else if (taxibleIncome <= 120e6) {
    incomeTaxes = 60e6 * 0.05 + (taxibleIncome - 60e6) * 0.1;
  } else if (taxibleIncome <= 210e6) {
    incomeTaxes = 60e6 * 0.05 + 60e6 * 0.01 + (taxibleIncome - 120e6) * 0.15;
  } else if (taxibleIncome <= 384e6) {
    incomeTaxes =
      60e6 * 0.05 + 60e6 * 0.01 + 90e6 * 0.15 + (taxibleIncome - 210e6) * 0.2;
  } else if (taxibleIncome <= 624e6) {
    incomeTaxes =
      60e6 * 0.05 +
      60e6 * 0.01 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      (taxibleIncome - 384e6) * 0.25;
  } else if (taxibleIncome <= 960e6) {
    incomeTaxes =
      60e6 * 0.05 +
      60e6 * 0.01 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      240e6 * 0.25 +
      (taxibleIncome - 624e6) * 0.3;
  } else {
    incomeTaxes =
      60e6 * 0.05 +
      60e6 * 0.01 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      240e6 * 0.25 +
      336e6 * 0.3 +
      (taxibleIncome - 960e6) * 0.35;
  }

  incomeTaxes = incomeTaxes.toLocaleString();
  content = "Họ tên: " + fullName + "; Tiền thuế là: " + incomeTaxes + "VNĐ";

  document.getElementById("divInfo3").innerHTML = content;
  document.getElementById("divInfo3").classList.add("info");
}

//Bài 4: tính tiền cáp

function tinhTienCap() {
  var customerType = document.getElementById("customerType").value;
  var customerCode = document.getElementById("customerCode").value;
  var premiumChannel = +document.getElementById("premiumChannel").value;
  var connect = +document.getElementById("connect").value;
  var payment = "";
  var content = "";

  if (customerType === "nhaDan") {
    payment = 4.5 + 20.5 + premiumChannel * 7.5;
  } else if (customerType === "doanhNghiep") {
    if (connect <= 10) {
      payment = 15 + 75 + premiumChannel * 50;
    } else {
      payment = 15 + 75 + (connect - 10) * 5 + premiumChannel * 50;
    }
  } else {
    alert("Vui lòng chọn loại khách hàng!");

    return;
  }

  payment = payment.toLocaleString();
  content =
    "Mã khách hàng: " +
    customerCode +
    ";" +
    "Số tiền thanh toán là: " +
    payment +
    " $";

  document.getElementById("divInfo4").innerHTML = content;
  document.getElementById("divInfo4").classList.add("info");
}

function onChangeSelect() {
  var select = document.getElementById("customerType");
  if (select.value === "doanhNghiep") {
    document.getElementById("connect").style.display = "block";
  }
  if (select.value === "nhaDan") {
    document.getElementById("connect").style.display = "none";
  }
}
