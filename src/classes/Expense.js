export class Expense {
  constructor({name, amount, category} = {}){
    this._name = name;
    this._amount = amount;
    this._category = category;
  }

  get amount(){return this._amount}
  set amount(newValue){this._amount = newValue}

  get name(){return this._name}
  set name(newName){this._name = newName}

  get category(){return this._category}
  set category(newCategory){this._category = newCategory}
}
export default Expense;
