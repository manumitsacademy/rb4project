import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  constructor() { }
  accountTypes = [
    {
      accountTypeName: 'Savings',
      accountServices: ['password change','ministatement','checkbook']
    },
    {
      accountTypeName: 'Current',
      accountServices: ['withdraw limit','online banking','fullstatement']
    }
  ]
  selectedAccountTypeIndex=null;
  selectedServiceType=null;
   
  handleAccountType(){
    console.log(this.selectedAccountTypeIndex)
  }
  ngOnInit(): void {
  }

}
