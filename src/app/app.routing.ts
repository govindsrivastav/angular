import { Routes, RouterModule } from "@angular/router";

import { CategoryComponent } from "./components/category/category.component";
import { ImageComponent } from "./components/categoryImage/image.component";
import { DetailsComponent } from "./components/imageDetails/details.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/categories', pathMatch: 'full'},
	{ path: 'categories', component: CategoryComponent},
    { path: 'categoryimage/:id', component: ImageComponent},
    { path: 'imagedetails/:id', component: DetailsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);