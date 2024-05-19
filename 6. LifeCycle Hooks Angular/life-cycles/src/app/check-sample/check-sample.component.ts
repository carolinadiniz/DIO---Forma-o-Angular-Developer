import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css',
})
export class CheckSampleComponent
  implements
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnInit,
    OnDestroy
{
  quantidade: number = 0;

  constructor() {}

  adicionar() {
    this.quantidade += 1;
  }

  decrementar() {
    this.quantidade -= 1;
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('Goodbye Everybody!');
  }
}
