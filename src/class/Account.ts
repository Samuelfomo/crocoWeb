import axios from "axios";


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

  static async Recharge(manager: number, amount: number, user: number, token: string) {

    const SiteUrl = "http://13.38.59.232";
    console.log(token)

    try {
      const response = await axios.put(`${SiteUrl}/account/add`, {
        balance: amount,
        user: user,
        manager: manager
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      if (!response.status) return null;
      return Account.fromJson(response.data);

    } catch (error){
      throw error;
    }
  }
}
export default Account;

// class Account {
//   public code: number;
//   public balance: string;
//   public updatedAt: Date;
//   public time: Date;
//   constructor(code: number, balance: number, updatedAt: Date, time: Date) {
//     this.code = code;
//     this.balance = balance;
//     this.updatedAt = updatedAt;
//     this.time = time;
//   }
//   public static fromJson(json: any ): Account {
//     return new Account(json.code, json.balance, json.updatedAt, json.time);
//   }
//
// }
// export default Account;
