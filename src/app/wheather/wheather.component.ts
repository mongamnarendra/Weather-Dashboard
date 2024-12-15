import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WheatherService } from '../services/wheather.service';
import { Wheather } from '../models/wheather';

@Component({
  selector: 'app-wheather',
  templateUrl: './wheather.component.html',
  styleUrls: ['./wheather.component.css']
})
export class WheatherComponent {

  formgroup!:FormGroup;
  city!:string;
  weatherData:any;
  constructor(private fb:FormBuilder,private service:WheatherService) {
    this.formgroup=this.fb.group(
      {
        city:['',[Validators.required]]
      }
    )
  }


  ngOnInit() {
    if(this.formgroup.get('city')?.value == '') {
      this.city='London'
      this.service.getByCity(this.city).subscribe(data => {
        this.weatherData=data;
      })
    }
    else {
      this.service.getByCity(this.formgroup.get('city')?.value).subscribe(data => {
        console.log(data);
        this.weatherData=data;
        console.log(this.weatherData.values+"contained values")
      })
    }
    
  }

}
