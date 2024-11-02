import { Component } from '@angular/core';
import cellMappings from './matchCells'
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
    if(evt.keyCode < 48 || evt.keyCode > 57 && evt.keyCode !== 8){
      console.log(evt)
      evt.preventDefault();
    }else{
      this.matrix[row][col].val = parseInt(evt.key);
    }
  }

  solveSudoku(){
    this.changeIsInitial();
    if(this.sudokuSolver(JSON.parse(JSON.stringify(this.matrix)))){
      console.log("solved");
    }else{
      console.log("Unsolvable")
    }
  }

  sudokuSolver(board:any[]):boolean{
    let emptyIndexes:any[]= this.findEmptyCell(board);
    let flagArr =  [];
    if(emptyIndexes.length){
      for(let i = 1; i < 10; i++ ){
        board[emptyIndexes[0]][emptyIndexes[1]].val = i;
        if(this.checkCellValid(emptyIndexes[0], emptyIndexes[1], board)){
          flagArr.push(this.sudokuSolver(board));
        }else{
          return false;
        }
      }
      console.log(emptyIndexes , flagArr.some(x => x == true));
      let flag = flagArr.some(x => x == true);
      if(flag) this.matrix = JSON.parse(JSON.stringify(board));
      return !flagArr.length ? false : flag;
    }else{
      let isComplete = this.checkIfComplete();
      if(!isComplete) return false;
      let allValid = this.checkAllValid(board);
      if(allValid && isComplete) this.matrix = JSON.parse(JSON.stringify(board));
      return isComplete && allValid;
    }
  }

  findEmptyCell(board:any){
    for(let i  in this.matrix){
      for(let j in this.matrix[i]){
        if(this.matrix[i][j].val === ''){
          return [i,j];
        }
      }
    }
    return [];
  }

  checkCellValid(x:any, y:any, board: any){
    let checkCells = cellMappings['c'+x+y];
    return !checkCells.some((inds:any) => {
      return board[inds[0]][inds[1]].val == board[x][y];
    });
  }  

  changeIsInitial(){
    for(let i in this.matrix){
      for(let j in this.matrix[i]){
        if(this.matrix[i][j].val !== '') this.matrix[i][j].isInitial = true;
      }
    }
  }

  checkAllValid(board:any){
    for(let i in board){
      for(let j in board[i]){
        if(!this.checkCellValid(i, j, board)) return false;
      }
    }
    return true;
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
