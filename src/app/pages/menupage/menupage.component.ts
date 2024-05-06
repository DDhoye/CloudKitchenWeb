import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from '../../services/order-details.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menupage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menupage.component.html',
  styleUrl: './menupage.component.css'
})
export class MenupageComponent implements OnInit {
  constructor(private param: ActivatedRoute,
              private service: OrderDetailsService){}

  getMenuId:any;
  menuData:any;

  ngOnInit(): void{
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');

    if(this.getMenuId){
      this.menuData = this.service.foodDetails.filter((value) =>{
        return value.id == this.getMenuId
      })
      console.log(this.menuData, 'menudata');

    }


  }

}
