import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";
import { DataService } from '../../data.service';

@Component({
    selector: 'details-component',
    templateUrl: './details.component.html'

})

/**
 * @component
 * @description
 * This component will show all the added products and its detail.
 */
export class DetailsComponent implements OnInit {
	public details : any;
	public imageid : number;
	public isSelected : boolean;
    /**
     * Constructor for DetailsComponent class
     * @param router
     * @param _dataService
     */
    constructor(private router: Router, private _dataService: DataService, private _currentRouter: ActivatedRoute){
    }

    /**
    * @override OnInit
     */
    ngOnInit(){
		this.isSelected = false;
        this._currentRouter.params.subscribe(params => {this.imageid = params.id;});
		this._dataService.getImageDetails(this.imageid).subscribe(res => {
			if (res.status == 'success'){
				this.details = res.data;
			}
		});
    }
	
	addToCart(form){
		// console.log(form.imagetype);
		let currentTimeStamp = new Date().getTime();
		let isValidForm = true;
		if (!form.imagetype) {
			this.isSelected = false;
			isValidForm = false;
		}
		
		if(isValidForm){
			this._dataService.postPurchase(form.imagetype,currentTimeStamp).subscribe(data => {
				if (data.message == "order placed") {
					alert('Your order has been placed.');
				} else {
					this.isSelected = true;
				}
			});
		} else {
			this.isSelected = true;
		}
	}
    

}