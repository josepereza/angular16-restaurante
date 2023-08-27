import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'burguer';
  foodData:any;
  constructor(private service:MenuService){}
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }
}
