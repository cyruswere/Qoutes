export class Quote {
    public showDescription: boolean;
    constructor(public id: number,public name: string,public description: string, public completeDate: Date,public like: number,public unlike: number){
      this.showDescription=false;
    }
}
