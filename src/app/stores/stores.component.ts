import { Component, OnInit } from '@angular/core';
import { Stores } from '../shared/interfaces/stores';
import { StoresService } from '../shared/services/stores.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  stores!: Stores[];

  constructor(private storesService: StoresService) {}

  ngOnInit():void {
    this.storesService.getStores().subscribe(
     
      stores => this.stores = stores

    );
  }

}
