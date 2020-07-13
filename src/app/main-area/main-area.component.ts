import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent{

  trainer = "praveen";
  newTrainer="";
  addTrainerFlag = false;
  trainers:string[] | undefined;
  choice='bank';
 
  addTrainer(){

    this.trainers === undefined ? this.trainers = []:'';
    this.addTrainerFlag = true;
    setTimeout(()=>{
      this.trainers.push(this.newTrainer);
      this.newTrainer = '';
      this.addTrainerFlag = false;
    },3000)
    
  }
  deleteTrainer(index){
    this.trainers.splice(index,1);
    if(this.trainers.length===0){
      this.trainers=undefined;
    }
  }
}
