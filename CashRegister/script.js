let price = 19.5;
let cid = [
  ['PENNY', 0.5],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0]
];

const currencyUnit = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
};

const cashInput = document.getElementById("cash");// Lấy thẻ input nơi mà người dùng nhập số tiền họ đưa cho quầy
const purchaseBtn = document.getElementById("purchase-btn");
const changeDueElement = document.getElementById("change-due");// Kết quả trả về

purchaseBtn.addEventListener("click", () => {
  const cash = parseFloat(cashInput.value);

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;

  }

  if (cash === price) {
    changeDueElement.textContent = "No change due - customer paid with exact cash";
    return;
  }

  const result = checkCashRegister(price, cash, cid);

  if (result.status === "INSUFFICIENT_FUNDS") {
    changeDueElement.textContent = "Status: INSUFFICIENT_FUNDS";
  } else if (result.status === "CLOSED") {
    changeDueElement.textContent = "Status: CLOSED " + formatChange(result.change);
  } else {
    changeDueElement.textContent = "Status: OPEN " + formatChange(result.change);
  }
});

// Hàm trả lại kết quả format giống yêu cầu đề bài
function formatChange(changeArr) {
  return changeArr.map(([unit, amt]) => `${unit}: $${amt.toFixed(2)}`).join(" ");
}

function checkCashRegister(price, cash, cid) {
  let changeDue = +(cash - price).toFixed(2); // Tính số tiền trả lại cho khách
  const totalCid = +(cid.reduce((sum, [_, amount]) => sum + amount, 0).toFixed(2)); // tính tổng tiền trong ngăn kéo
   console.log (totalCid);
    console.log ( changeDue);
    // _,amount => bỏ qua phần tử đầu tiên(vd: PENNY), lấy phần tử thứ hai : VD: 90
  const reversedCid = cid.slice().reverse(); // Đảo ngược để ưu tiên mệnh giá lớn trước

  if (totalCid < changeDue) { // Không đủ tiền trả lại khách
    console.log (totalCid);
    console.log ( changeDue);
    return { status: "INSUFFICIENT_FUNDS", change: [] }; // trả về object có hai thuộc tính status và change

  }

  if (totalCid === changeDue) {
    console.log (totalCid);
    console.log ( changeDue);
    const filteredChange = cid.filter(([_, amount]) => amount > 0);
    return { status: "CLOSED", change: filteredChange };
  }

  const change = []; //slice dùng để không thay đổi mảng gốc
  

  for (let [unit, amount] of reversedCid) {
    let value = 0;
    const unitVal = currencyUnit[unit];

    while (changeDue >= unitVal && amount >= unitVal) {
      value += unitVal;
      amount -= unitVal;
      changeDue = +(changeDue - unitVal).toFixed(2);
    }

    if (value > 0) {
      change.push([unit, +value.toFixed(2)]);
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change };
}