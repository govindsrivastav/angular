import { Component, Input } from '@angular/core'
import { Router } from "@angular/router";
import {DataService} from '../../data.service';

/**
 * @component
 * @description 
 */
@Component ({
    selector : 'category-component',
    templateUrl: './category.component.html'
})
export class CategoryComponent {
	public categories : any;
    
    /**
     * Constructor for CategoryComponent class
     * @param router
     * @param _dataService
     */
    constructor (private router: Router, private _dataService: DataService) {
    }

	ngOnInit(){        
		this._dataService.getCategories().subscribe(res => {
			if (res.status == 'success'){
				this.categories = res.data;
			}
		});
    }
	
	getimagecategory(categoryId){
		this.router.navigate(['/categoryimage/'+categoryId]);
	}
   
}