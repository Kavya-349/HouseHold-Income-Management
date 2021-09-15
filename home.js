function saveIncome() {
    income_date = document.getElementById("date_income_input").value;
    income_amount = document.getElementById("amount_income_input").value;
    income_type = document.getElementById("type_income_input").value;
    income_remark = document.getElementById("remarks_income_input").value;
}

function saveExpense() {
    expense_date = document.getElementById("date_expense_input").value;
    expense_money = document.getElementById("amount_expense_input").value;
    expense_where = document.getElementById("where_expense_input").value;
    expense_remark = document.getElementById("remarks_expense_input").value;
}