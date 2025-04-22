import Profil from "./Profil";
import Contact from "./Contact";
import Account from "./Account";

class User{
  public guid: number;
  public name: string;
  public code: number;
  public pin: number;
  public profil: Profil;
  public contact: Contact;
  public blocked: boolean;
  public activated: boolean;
  public createdBy: User;
  public deleted: boolean;
  public isSecured: boolean;
  public lastLogin: Date;
  public account: Account;
  constructor(
    guid : number | null,
    name: string,
    code: number,
    pin: number,
    profil: Profil,
    contact: Contact,
    blocked : boolean,
    activated: boolean,
    createdBy: User | null,
    deleted: boolean,
    isSecured: boolean,
  lastLogin : Date| null,
    account: Account
  ) {
    this.guid = guid;
    this.name = name;
    this.code = code;
    this.pin = pin;
    this.profil = profil;
    this.contact = contact;
    this.blocked = blocked;
    this.activated = activated;
    this.createdBy = createdBy;
    this.deleted = deleted;
    this.isSecured = isSecured;
    this.lastLogin = lastLogin;
    this.account = account;
  }

  public static fromJson(json: any): User {
    return new User(
      json.guid, json.name, json.code, json.pin, json.profil, json.contact, json.blocked, json.activated, json.createdBy? json.createdBy : null, json.deleted, json.isSecured, new Date(json.lastLogin), json.account);
  }
}
export default User;
