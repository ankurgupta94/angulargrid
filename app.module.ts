import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataTableModule } from 'angular2-datatable';
import { SearchFilterPipe } from './data-filter.pipe';
import { FormsModule } from '@angular/forms';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';


@NgModule({
    imports:[BrowserModule,DataTableModule, FormsModule,Ng2Bs3ModalModule],
    declarations:[AppComponent, SearchFilterPipe],
    bootstrap:[AppComponent]
})
export class AppModule{ }