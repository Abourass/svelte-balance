import Expense from './Expense';

export class ExpenseWithSub extends Expense{
  constructor({name, amount, category} = {}){
    super({name, amount, category});
    this._subsources = [];
  }

  get subsources(){ return this._subsources; }
  addSource(expense) { this._subsources.push(expense); return this; }

  get subtotal(){
    let subtotal = 0;
    this._subsources.forEach(source => subtotal += source.amount);
    return this.amount - subtotal
  }
}
export default ExpenseWithSub;
