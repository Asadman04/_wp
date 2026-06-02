let balance = 0;

function addRecord() {
    const item = document.getElementById("item").value;
    const amount = Number(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (item === "" || amount <= 0) {
        alert("請輸入正確資料");
        return;
    }

    const list = document.getElementById("recordList");
    const li = document.createElement("li");

    if (type === "income") {
        balance += amount;
        li.innerHTML = `➕ ${item}：${amount} 元`;
    } else {
        balance -= amount;
        li.innerHTML = `➖ ${item}：${amount} 元`;
    }

    list.appendChild(li);

    document.getElementById("balance").textContent = balance;

    document.getElementById("item").value = "";
    document.getElementById("amount").value = "";
}
