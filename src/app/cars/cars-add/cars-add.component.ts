import { Component, OnInit, Output,OnChanges, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { Engine } from 'src/app/models/engine';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-cars-add',
  templateUrl: './cars-add.component.html',
  styleUrls: ['./cars-add.component.css']
})
export class CarsAddComponent implements OnInit, OnChanges {
@Output() update: EventEmitter<boolean> = new EventEmitter<boolean>();
@Input() selectedCar: Car;

car: Car= new Car();

constructor(private carService: CarService) { }

  ngOnInit() {
    this.car.engine = new Engine();
    this.car.engine.fuel = null;
    this.car.engine.consumption = 0;
    this.car.engine.power = 0;
  }
  ngOnChanges(changes: SimpleChanges): void{
    this.car = this.selectedCar;
    console.log(this.car);
  }
  isAddAction(carId): boolean{
    return isNullOrUndefined(carId) || carId === 0;
  }
debug(form){ 
  console.log(form);
}
processForm(car: Car): void{
  if(this.isAddAction(car.id )){
    this.carService.addCar(car).subscribe((cars: Car[]) => {
      this.update.emit(true);
        },
        error => {
          console.log(error);
          alert('Could not retrive cars');
        });
  }else{
    this.carService.editCar(car).subscribe((car: Car) => {
      this.update.emit(true);

    });
  }
  
}
   
  }

