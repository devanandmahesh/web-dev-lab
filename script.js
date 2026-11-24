let expenses = [];

function addExpense() {
  const name = document.getElementById("name").value.trim();
  const amount = Number(document.getElementById("amount").value);
  const category = document.getElementById("category").value;

  if (name === "" || amount <= 0 || isNaN(amount)) {
    document.getElementById("error").innerText = "Enter a valid name and an amount greater than 0.";
    return;
  }

  document.getElementById("error").innerText = "";
  expenses.push({ name: name, amount: amount, category: category });

  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
  showExpenses();
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  showExpenses();
}

function showExpenses() {
  const filter = document.getElementById("filter").value;
  const list = document.getElementById("list");
  list.innerHTML = "";
  let total = 0;

  expenses.forEach(function (e, i) {
    if (filter !== "All" && e.category !== filter) return;

    total += e.amount;
    const li = document.createElement("li");
    li.innerHTML = e.name + " - ₹" + e.amount + " (" + e.category + ") ";

    const btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.onclick = function () { deleteExpense(i); };

    li.appendChild(btn);
    list.appendChild(li);
  });

  document.getElementById("total").innerText = total;
}
