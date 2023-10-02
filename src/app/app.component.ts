import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sudoku';
  matrix = [
    [{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false}],
    [{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false}],
    [{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false}],
    [{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false}],
    [{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false}],
    [{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false}],
    [{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false}],
    [{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false}],
    [{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false},{val : ' ', isInitial: false}],
  ];
  columns = [0,1,2,3,4,5,6,7,8]
  rows = [0,1,2,3,4,5,6,7,8];
  isSubmitted = false;


  handleKeyPress(evt: KeyboardEvent, row:number, col:number){
    if(evt.keyCode < 48 || evt.keyCode > 57){
      console.log(evt)
      evt.preventDefault();
    }else{
      this.matrix[row][col].val = evt.key;
    }
    if(this.isSubmitted) this.checkIfGridValid()
  }

  checkIfGridValid(){
    
  }
}
