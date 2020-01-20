import Transaction from './Transaction';

export class Ledger {
  constructor(){
    this._incomesSources = [];
    this._expenses = [];
    this._transactions = [];
  }

  addIncomeSource(incomeSource){
    this._incomesSources.push(incomeSource);
    return this;
  }
  addExpense(expense){
    this._expenses.push(expense);
    if (this._transactions.length === 0){
      this._transactions.push(
        new Transaction(
          this.initialBalance, 'sub', expense.amount
        ))
    } else {
      new Transaction(
        this._transactions[this._transactions.length - 1].total,
        'sub',
        expense.amount)
    }
    return this
  }

  get incomeSources(){ return this._incomesSources; }
  get expenses(){ return this._expenses; }
  get transactions(){return this._transactions; }
  get initialBalance(){
    let initialBalance = 0;
    this.incomeSources.forEach((source) => {
      initialBalance += source.amount;
    });
    return initialBalance;
  }
}
export default Ledger;
