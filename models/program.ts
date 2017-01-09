export class Program{
    ProgramName: string;
    ProgramId: string;
    Creator: string;

    constructor(_programname:string,_programid:string,_creator:string){
        this.ProgramName=_programname;
        this.ProgramId=_programid;
        this.Creator=_creator;
    }
}