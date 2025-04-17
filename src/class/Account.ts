class Account{
  public id: number;
  public code: number;
  public balance: number;
  public updatedAt: Date;
  public time: Date;

  constructor(id: number, code: number, balance: number, updatedAt: Date, time: Date)
  {
    this.id = id;
    this.code = code;
    this.balance = balance;
    this.updatedAt = updatedAt;
    this.time = time;
  }

  public static fromJson(json: any): Account{
    return new Account(json.id, json.code, json.balance, json.updatedAt, json.time);
  }
}
export default Account;
