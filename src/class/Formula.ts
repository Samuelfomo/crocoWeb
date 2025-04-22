class Formula {
  public guid: number;
  public code: string;
  public name: string;
  public amount: number;
  public isOption: boolean;
  public includes: Formula;
  public extendes: Formula;
  public description: string;
  public created: Date;

  constructor(
    guid: number,
    code: string,
    name: string,
    amount: number,
    is_option: boolean,
    includes: Formula,
    extendes: Formula,
    description: string,
    created: Date
  ) {
    this.guid = guid;
    this.code = code;
    this.name = name;
    this.amount = amount;
    this.isOption = is_option;
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
      json.includes ?? [],
      json.extendes ?? [],
      json.description,
      new Date(json.created)
    );
  }
}

export default Formula;
