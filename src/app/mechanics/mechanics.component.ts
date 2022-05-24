import { Component, OnInit } from '@angular/core';
import { Mechanics } from '../shared/interfaces/mechanics';
import { MechanicsService } from '../shared/services/mechanics.service';

@Component({
  selector: 'app-mechanics',
  templateUrl: './mechanics.component.html',
  styleUrls: ['./mechanics.component.css']
})
export class MechanicsComponent implements OnInit {

  mechanics!: Mechanics[];

  constructor(private mechanicsService: MechanicsService) {}

  ngOnInit():void {
    this.mechanicsService.getMechanics().subscribe(
     
      mechanics => this.mechanics = mechanics

    );
  }
}
