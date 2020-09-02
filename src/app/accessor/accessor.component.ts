import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accessor',
  templateUrl: './accessor.component.html',
  // styleUrls: ['./input-custom.component.css']
})
export class AccessorComponent implements OnInit {

  constructor() { }
@Input() ParentFormGroup;
  ngOnInit(): void {
  }

}
