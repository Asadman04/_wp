let records = JSON.parse(localStorage.getItem("records")) || [];

function addRecord() {
    const item = document.getElementById("item").value;
    const amount = Number(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (item === "" || amount <= 0) {
        alert("請輸入正確資料");
        return;
    }

    records.push({
        item: item,
        amount: amount,
        type: type
    });

    localStorage.setItem("records", JSON.stringify(records));

    document.getElementById("item").value = "";
    document.getElementById("amount").value = "";

    showRecords();
}

function deleteRecord(index) {
    records.splice(index, 1);
    localStorage.setItem("records", JSON.stringify(records));
    showRecords();
}

function showRecords() {
    const list = document.getElementById("recordList");
    const balanceText = document.getElementById("balance");

    list.innerHTML = "";

    let income = 0;
    let expense = 0;

    records.forEach((record, index) => {
        const li = document.createElement("li");

        if (record.type === "income") {
            income += record.amount;
            li.innerHTML = `➕ ${record.item}：${record.amount} 元 
            <button onclick="deleteRecord(${index})">刪除</button>`;
        } else {
            expense += record.amount;
            li.innerHTML = `➖ ${record.item}：${record.amount} 元 
            <button onclick="deleteRecord(${index})">刪除</button>`;
        }

        list.appendChild(li);
    });

    const balance = income - expense;
    balanceText.textContent = balance;
}

showRecords();
