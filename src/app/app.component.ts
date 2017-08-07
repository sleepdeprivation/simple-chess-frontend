import { Component } from '@angular/core';
import { ChessBoardService } from './chess-board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  board;

  constructor(private boardService : ChessBoardService){
    this.board = boardService.getImageBoard();
  }

  clickedOn(x:number, y:number){
    this.boardService.select(x,y);
    this.board = this.boardService.getImageBoard();
  }

  isWhite(x:number, y:number){
    return (x%2 == y%2);
  }

  isBlack(x:number, y:number){
    return (x%2 != y%2);
  }

}
