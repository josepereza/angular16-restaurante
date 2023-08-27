import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent {
menu!:any
  constructor(private route:ActivatedRoute, private service:MenuService){

  }
  ngOnInit() {
    const menuId =Number(this.route.snapshot.paramMap.get('id'));
    this.menu=this.service.foodDetails.filter(data=>data.id==menuId)
    console.log(this.menu[0])
    
  }
}
