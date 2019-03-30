import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

	@Input() grade: number;
	@Input() fullIcon: string;
    @Input() emptyIcon: string;

  constructor() { }

  ngOnInit() {
  }

}
