
class Expense {
    constructor(id, detail, date, amount, category) {
        this.id = id;
        this.detail = detail;
        this.date = date;
        this.amount = amount;
        this.category = category;
    }
}

class ExpenseManager {
    expenses = [];
    getData() {
        if (localStorage.getItem("all") != undefined)
            this.expenses = JSON.parse(localStorage.getItem("all"));
    }
    addNewExpense = (ex) => {
        this.getData();
        this.expenses.push(ex);
        localStorage.setItem("all", JSON.stringify(this.expenses));
    };
    getAllExpenses = () => {
        this.getData();
        return this.expenses;
    }
    updateExpense = (id, ex) => {
        const index = this.expenses.findIndex((e) => e.id == id)
        if (index == -1)
            throw "Expense not found to update";
        this.expenses.splice(index, 1, ex);
        localStorage.setItem("all", JSON.stringify(this.expenses))
    }
    getStringDate(dt) {
        return `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`;
    }
    findExpenseByDate(dt) {
        this.getData();
        return this.expenses.filter((e) => this.getStringDate(dt) == this.getStringDate(new Date(e.date)));
    }
    findExpenseByCategory(cat) {
        this.getData();
        return this.expenses.filter((e) => e.category == cat);
    }
}



