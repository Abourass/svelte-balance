export class Transaction{
  constructor(total, typeOfTransaction = 'sub', amount){
    this.beforeTransacation = total;
    this.typeOfTransaction = typeOfTransaction;
    this.amount = amount;
    this.total = typeOfTransaction === 'sub' ? total - amount : total + amount;
  }
}
export default Transaction;
