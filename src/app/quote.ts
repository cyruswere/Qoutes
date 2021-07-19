export class Quote {

  public showDescription: boolean ;
  like:number;
  unlike:number;
  constructor(public id: number,public name: string,public description: string, public completeDate:Date){
      this.showDescription=false;
      this.like=0;
      this.unlike=0;
  }
}