export class StaticsReponse {
    totalNumberWorkingDate: number= 0;
    totalMoneyGet:number = 0;
    totalMoneyAdvance:number = 0;


    public getTotalNumberWorkingDate():number {
        return this.totalNumberWorkingDate;
    }

    public setTotalNumberWorkingDate(totalNumberWorkingDate:number):void {
        this.totalNumberWorkingDate = totalNumberWorkingDate;
    }

    public getTotalMoneyGet():number {
        return this.totalMoneyGet;
    }

    public setTotalMoneyGet(totalMoneyGet:number):void {
        this.totalMoneyGet = totalMoneyGet;
    }

    public getTotalMoneyAdvance():number {
        return this.totalMoneyAdvance;
    }

    public setTotalMoneyAdvance(totalMoneyAdvance:number):void {
        this.totalMoneyAdvance = totalMoneyAdvance;
    }
}