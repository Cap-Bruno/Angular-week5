import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from '../../../Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menus: Menu[] = [];

  constructor(private menuService: MenuService){
    this.getMenu();
  }

  getMenu(): void{
    this.menuService.getAll().subscribe((menus) => (this.menus = menus))
  }
}
