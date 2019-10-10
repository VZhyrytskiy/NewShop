import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', {static: false})
  childComp: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit() {
    // Тут можно задействовать Renderer2
    this.childComp.nativeElement.innerHTML = 'Shop';
  }
}
