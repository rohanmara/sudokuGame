import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sudoku';
  matrix:any = [
    [{val : '', isInitial: false},{val : '', isInitial: false},{val: '', isInitial: false},{val: '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val: '', isInitial: false},{val: '', isInitial: false}],
    [{val : '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val: '', isInitial: false},{val: '', isInitial: false}],
    [{val : '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val: '', isInitial: false},{val: '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val: '', isInitial: false}],
    [{val : '', isInitial: false},{val : '', isInitial: false},{val: '', isInitial: false},{val: '', isInitial: false},{val: '', isInitial: false},{val: '', isInitial: false},{val : '', isInitial: false},{val: '', isInitial: false},{val : '', isInitial: false}],
    [{val : '', isInitial: false},{val : '', isInitial: false},{val: '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val: '', isInitial: false},{val: '', isInitial: false},{val : '', isInitial: false}],
    [{val : '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val: '', isInitial: false},{val: '', isInitial: false},{val: '', isInitial: false},{val: '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false}],
    [{val: '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val: '', isInitial: false},{val: '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false}],
    [{val: '', isInitial: false},{val: '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val: '', isInitial: false}],
    [{val: '', isInitial: false},{val: '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val : '', isInitial: false},{val: '', isInitial: false},{val: '', isInitial: false},{val : '', isInitial: false},{val: '', isInitial: false}],
  ];
  columns = [0,1,2,3,4,5,6,7,8]
  rows = [0,1,2,3,4,5,6,7,8];
  isSubmitted = false;


  handleKeyPress(evt: KeyboardEvent, row:number, col:number){
    if(evt.keyCode < 48 || evt.keyCode > 57){
      console.log(evt)
      evt.preventDefault();
    }else{
      this.matrix[row][col].val = parseInt(evt.key);
    }
    // if(this.isSubmitted) this.checkIfGridValid()
  }

  // checkIfGridValid(){

  // }

  solveSudoku(){
    this.changeIsInitial();
    let simpleArr :any = this.matrix.map((x:any) => x.map((y:any) => y.val) );
    console.log(simpleArr);
    do{
      for(let row in simpleArr){
        for(let col in simpleArr[row]){
          if(this.matrix[row][col].isInitial) continue;
          let arr = this.checkFromNumbers(row, col);
          let possible = [];
          for( let num = 1; num < 10; num++ ){
            if(arr.indexOf(num) !== -1) continue;
            possible.push(num)
          }
          if(row === '3' && col === '6') console.log(arr)
          if(possible.length === 1) this.matrix[row][col] = {val : possible[0], isInitial : false};
  
          this.matrix = [...this.matrix]
        }
      }
    } while( !this.checkIfComplete() );

  }

  checkFromNumbers(row: any, col:any ){
    let checkArr = [];
    for(let index1 of this.columns){
      if(index1 === col) continue;
      checkArr.push([row, index1]);
    }
    for(let index2 of this.columns){
      if(index2 === row) continue;
      checkArr.push([index2, col]);
    }
    let startX = Math.floor(row / 3) * 3;
    let startY = Math.floor(col / 3) * 3;
    for(let i = startX; i < startX + 3; i++){
      for(let j =startY ; j < startY + 3; j++){
        if(row === i && col === j) continue;
        checkArr.push([i,j]);
      }
    }
    return [...new Set(checkArr)].map((x) => {
      return this.matrix[x[0]][x[1]].val
    })
  }

  changeIsInitial(){
    for(let i in this.matrix){
      for(let j in this.matrix[i]){
        if(this.matrix[i][j].val !== '') this.matrix[i][j].isInitial = true;
      }
    }
  }

  checkIfComplete(){
    for(let i in this.matrix){
      for(let j in this.matrix[i]){
        if(this.matrix[i][j].val === '') return false
      }
    }
    return true;
  }
}
