export class Income {
  constructor({name, amount} = {}){
    this._name = name;
    this._amount = amount;
  }

  get amount(){return this._amount}
  set amount(newValue){this._amount = newValue}

  get name(){return this._name}
  set name(newName){this._name = newName}
}
export default Income;
