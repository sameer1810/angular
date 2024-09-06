import { Component, OnChanges, Input, Injectable } from '@angular/core';

@Component({
  selector: 'app-myhello',
  templateUrl: './myhello.component.html',
  styleUrl: './myhello.component.css'
})
export class MyhelloComponent implements OnChanges{
@Input() name = "Sameer";
  empId = '1234'
  eName = 'Jaguar'
  counter : number = 0

ngOnInit() {
  this.counter++;
  console.log('onInit()')
}
ngOnChanges(changes : any) {
    if (changes.name)
      this.counter++;
  }
}