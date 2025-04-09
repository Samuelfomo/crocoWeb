class Profil {
  public guid: number;
  public name: string;
  public reference: string;
  constructor(guid: number, name: string, reference: string) {
    this.guid = guid;
    this.name = name;
    this.reference = reference;
  }

  public static fromJson(json: any): Profil {
    return new Profil(json.guid, json.name, json.reference);
  }
}
export default Profil;
