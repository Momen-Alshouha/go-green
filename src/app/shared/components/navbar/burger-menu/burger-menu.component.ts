import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
  
  @Output() opened = new EventEmitter<any>();
  active :boolean = false;

  ngOnInit() {
   
  }

  onBurgerClicked() {
    this.active = !this.active;
    this.opened.emit();
  }
}
