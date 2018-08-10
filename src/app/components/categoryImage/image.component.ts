import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";
import { DataService } from '../../data.service';
 // import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'image-component',
    templateUrl: './image.component.html'

})

/**
 * @component
 * @description
 * This component will show all the added products and its detail.
 */
export class ImageComponent implements OnInit {
	public imagelist : any;
	public categoryid : number;
    /**
     * Constructor for ImageComponent class
     * @param router
     * @param _dataService
     */
    constructor(private router: Router, private _dataService: DataService, private _currentRouter: ActivatedRoute){
		
    }

    
    ngOnInit(){
		this._currentRouter.params.subscribe(params => {this.categoryid = params.id;});
		this._dataService.getImageCategory(this.categoryid).subscribe(res => {
			if (res.status == 'success'){
				this.imagelist = res.data;
			}
		});
    }
	getcontactdetails(imageId){
		this._dataService.getContactDetails(imageId).subscribe(res => {
			if (res.status == 'success'){
				// this.imagelist = res.data;
				console.log(res.data);
				let msg = res.data[0].name + '\n' + res.data[0].company + '\n' + res.data[0].address + '\n';
				msg+= res.data[0].city + '\n' + res.data[0].landmark + '\n';
				msg+= res.data[0].contactperson + '\n' + res.data[0].designation;
				alert(msg);
			}
		});
	}

	getimagedetails(imageId){
		this.router.navigate(['/imagedetails/'+imageId]);
	}

}