import { Component, ViewChild } from '@angular/core';
import{ Program } from './models/program';
import { SearchFilterPipe } from './data-filter.pipe';
import {ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector:'my-grid',
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css']
})
export class AppComponent{
    programs:Program[]=[];
    selectedProgram:Program;
    constructor(){
        this.programs.push(new Program('Walmart','1','TTC'));
        this.programs.push(new Program('Amazon','2','Presto'));
        this.programs.push(new Program('SUC','3','OCT'));
        this.programs.push(new Program('ebay','4','UPE'));
        this.programs.push(new Program('Alibaba','5','BUR'));
        this.programs.push(new Program('Filpkart','6','OCT'));
        this.programs.push(new Program('Snapdeal','7','UPE'));
        this.programs.push(new Program('ShopClues','8','BUR'));
    
    }
    @ViewChild('myModal')
    modal: ModalComponent;
    close(){
        this.modal.close();
    }
    open(item:any){
        this.selectedProgram=item;
        this.modal.open();
    }
}