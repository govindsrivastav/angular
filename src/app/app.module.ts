// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

// Category
import { CategoryComponent } from "./components/category/category.component";
import { ImageComponent } from "./components/categoryImage/image.component";
import { DetailsComponent } from "./components/imageDetails/details.component";
import { DataService } from './data.service';

//app
import { AppComponent } from "./app.component";
import { routing } from "./app.routing";


@NgModule({
    declarations: [
        AppComponent,
        CategoryComponent,
        ImageComponent,
        DetailsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,        
        HttpModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {

}