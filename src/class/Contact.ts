import City from "./City";
import axios from "axios";

class Contact{
  public id: number;
  public guid: number;
  public firstname: string;
  public lastname: string;
  public city: City;
  public location: string;
  public language: string;
  public gender: string;
  public mobile: string;
  public email: string;
  public created: Date

  constructor(id: number, guid: number, firstname: string, lastname: string, city: City, location: string, language: string,
              gender: string, mobile: string, email: string, created: Date){
    this.id = id;
    this.guid = guid;
    this.firstname = firstname;
    this.lastname = lastname;
    this.city = city;
    this.location = location;
    this.language = language;
    this.gender = gender;
    this.mobile = mobile;
    this.email = email;
    this.created = created;
  }

  public static fromJson(json: any){
    return new Contact(
      json.id,
      json.guid,
      json.firstname,
      json.lastname,
      json.city,
      json.location,
      json.language,
      json.gender,
      json.mobile,
      json.email,
      json.created,
    )
  }

  async saved(token: string){
    try {
      const response = await axios.post(`http://13.38.59.232/contact/add`, {
        guid: this.guid,
        firstname: this.firstname,
        lastname: this.lastname,
        city: this.city,
        location: this.location,
        language: this.language,
        gender: this.gender,
        mobile: this.mobile,
        email: this.email,
        created: this.created,
      },{
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.status !== 200) {
        console.log("response.data", response.data.message);
        return null
      }
      // console.log("response.data", response.data.response)
      return Contact.fromJson(response.data.response);
    } catch (error){
      throw error;
    }
  }

  toJson(){
    return {
      code: this.guid,
      firstname: this.firstname,
      lastname: this.lastname,
      city: this.city,
      location: this.location,
      language: this.language,
      gender: this.gender,
      mobile: this.mobile,
      email: this.email,
      created: this.created
    }
  }
}
export default Contact;
