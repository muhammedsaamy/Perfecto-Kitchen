import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  getMenuId:any;
  menuData:any;
  constructor(private activatedRout:ActivatedRoute,private orderDetailsService:OrderDetailsService) { }

  ngOnInit(): void {
    this.getMenuId=this.activatedRout.snapshot.paramMap.get('id');
    if(this.getMenuId){
      this.menuData= this.orderDetailsService.foodDetails.filter((value)=>{
        return value.id==this.getMenuId;
      })
    }
  }

}
