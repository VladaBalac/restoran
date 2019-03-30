import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

	@Input() cousinNumber :number;
	@Input() cousinOnPage :number;
	@Output() sendPage :EventEmitter<number>;
	activePage :number = 1;
	paginationListNumber :number[] = [];

  constructor() {
  	this.sendPage = new EventEmitter();
  }

  calculate(){
  	return Math.ceil(this.cousinNumber / this.cousinOnPage);
  }

  ngOnChanges(){
  	for(let i = 1; i <= this.calculate(); i++){
  		this.paginationListNumber.push(i);
  	}
  }

  pagFunction(page){
  	if(page >= 1 && page <= this.calculate()){
  		this.activePage = page;
  		this.sendPage.emit({"page": this.activePage});
  	}
  }


  ngOnInit() {
  }

}
