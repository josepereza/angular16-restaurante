import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  foodData:any[]=[]
  constructor(private service:MenuService) {
 this.foodData=this.service.foodDetails
    
  }

}
