let result = document.getElementById('result');
//console.log(result)
let inputCal = prompt("Bấm phím tương úng để thực hiện các tác vụ tính toán (1), (2), (3), …\
(1): Phép +\
(2): Phép –\
(3): Phép *\
(4): Phép /\
(0): Hiện ra 1 alert để nói cảm ơn với người dùng là đã sử dụng trười trình");

function checkDivision(ip2){
  if (ip2 == '0'){
    alert('Khong the thuc hien phep chia cho 0!');
    location.reload();
  }
}

function checkNum(x){
  console.log(x);
   if (isNaN(x) == false) { //Is there any other solutions?
     alert('Hay nhap so de tinh toan!');
     location.reload();
  }
}

if (inputCal == '0'){
  alert('Cam on da su dung chuong trinh tinh!');
} else {
  let input1 = prompt('Nhap so thu nhat: ');
  let input2 = prompt('Nhap so thu hai: ');
  checkNum(Number(input1));
  checkNum(Number(input2));
  if (((0 < Number(input1)) && (Number(input1) < 4)) || ((0 < Number(input2)) && (Number(input2) < 4))){
    alert('Ban da nhap sai so. Vui long nhap lai');
    location.reload();
  } else if ((input1 == null) || (input1 = '') || (input2 == null) || (input2 == '')){
    alert('Vui long nhap so can tinh toan!');
    location.reload();
  } else {
    switch(inputCal) {
      case '1':
        result.innerHTML = String(Number(input1) + Number(input2));
        break;
      case '2':
        result.innerHTML = String(Number(input1) - Number(input2));
        break;
      case '3':
        result.innerHTML = String(Number(input1) * Number(input2));
        break;
      case '4':
        checkDivision(input2);
        result.innerHTML = String(Number(input1) / Number(input2));
        break;    
    }
  }
}