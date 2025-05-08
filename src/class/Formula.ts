import axios from "axios";

class Formula {
  public guid: number;
  public code: string;
  public name: string;
  public amount: number;
  public isOption: boolean;
  public accise : boolean;
  public includes: Formula[];
  public extendes: Formula[];
  public description: string;
  public created: Date;

  constructor(
    guid: number,
    code: string,
    name: string,
    amount: number,
    is_option: boolean,
    accise: boolean,
    includes: Formula[] = [],
    extendes: Formula[] = [],
    description: string,
    created: Date
  ) {
    this.guid = guid;
    this.code = code;
    this.name = name;
    this.amount = amount;
    this.isOption = is_option;
    this.accise = accise;
    this.includes = includes;
    this.extendes = extendes;
    this.description = description;
    this.created = created;
  }

  static fromJson(json: any): Formula {
    return new Formula(
      json.guid,
      json.code,
      json.name,
      json.amount,
      json.isOption,
      json.accise,
      Array.isArray(json.includes) ? json.includes.map((f: any) => Formula.fromJson(f)) : [],
      Array.isArray(json.extendes) ? json.extendes.map((f: any) => Formula.fromJson(f)) : [],
      // json.includes ?? [],
      // json.extendes ?? [],
      json.description,
      new Date(json.created)
    );
  };

  async save(token: string) {
    const siteUrl = "http://13.38.59.232";

    try {
      const response = await axios.post(`${siteUrl}/formula/add`, {
        guid: this.guid,
        code: this.code,
        name: this.name,
        amount: this.amount,
        is_option: this.isOption,
        excise: this.accise,
        includes: this.includes,
        extendes: this.extendes,
        description: this.description,
        created: this.created,
      }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 200 && response.data?.status !== false) {
        return Formula.fromJson(response.data.response);
      } else {
        // L'API a retourné un message d'erreur explicite
        throw new Error(response.data.message || "Erreur inconnue de l'API");
      }

    } catch (error: any) {
      // Gestion des erreurs Axios + backend
      if (error.response && error.response.data) {
        const apiMessage = error.response.data.message || "Erreur serveur";
        console.error("Erreur API :", apiMessage);
        throw new Error(apiMessage);
      } else {
        // Autres erreurs (réseau, timeout, etc.)
        console.error("Erreur système :", error.message);
        throw new Error(error.message);
      }
    }
  }


  // async save(token : string) {
  //
  //   const siteUrl = "http://13.38.59.232";
  //
  //   try {
  //     const response = await axios.post(`${siteUrl}/formula/add`,{
  //       guid: this.guid,
  //       code: this.code,
  //       name: this.name,
  //       amount: this.amount,
  //       isOption: this.isOption,
  //       includes: this.includes,
  //       extendes: this.extendes,
  //       description: this.description,
  //       created: this.created,
  //     }, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
  //     if (response.status === 200) {
  //       console.log("success", response.data.response);
  //       return Formula.fromJson(response.data.response);
  //     }
  //     return null;
  //   } catch (error){
  //     throw error;
  //   }
  // }
}

export default Formula;
