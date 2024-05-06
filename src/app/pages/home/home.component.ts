import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../../services/order-details.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {

  constructor(private service:OrderDetailsService) { }

  foodData:any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
    
  }

}

