import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

@Injectable()
export class DataService {


  // inject http service and create object
  constructor(private http: Http) {

  }

 getCategories(){
	// TODO 1
	// let URL = 'http://localhost:3000/getcategories';
	let URL = 'http://localhost:4200/assets/demo_json/categories.json';
	return this.http.get(URL).map(res => res.json());
 }

 getImageCategory(categoryId){
	// TODO 2
	let URL = "http://localhost:4200/assets/demo_json/category.images.json";
	// let URL = 'http://localhost:3000/getimagecategory?categoryId='+categoryId;
	return this.http.get(URL).map(res => res.json());
 }
 
 getImageDetails(imageId){
	// TODO 3
	// let URL = 'http://localhost:3000/getimagedetails?imageId='+imageId;
	let URL = "http://localhost:4200/assets/demo_json/imagedetails.json";
	return this.http.get(URL).map(res => res.json());
 }
 
 getContactDetails(imageId){
	// TODO 4
	// let URL = 'http://localhost:3000/getcontactdetails?imageId='+imageId;
	let URL = "http://localhost:4200/assets/demo_json/contactdetails.json";
	return this.http.get(URL).map(res => res.json());
 }
 
 postPurchase(parameter1, parameter2){
	let localForm = {
		productImage : parameter1,
		productTimeStamp : parameter2
	};
	
	// TODO 5
	// let URL = 'http://localhost:3000/postpurchaseproduct';
	// return this.http.post(URL,localForm).map(res => res.json());
	
	let URL = 'http://localhost:4200/assets/demo_json/postpurchaseproduct.json';
	return this.http.get(URL).map(res => res.json());	
 } 

}