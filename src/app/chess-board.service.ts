import { Injectable } from '@angular/core';
import { ChessBoard } from 'simple-chess'

@Injectable()
export class ChessBoardService {

  board = new ChessBoard();
  selected = null;
  currentPiece = null;

  constructor() {
    console.log(this.board);
    this.board.setUpDefaultBoard();
  }

  select(x,y){
    if(this.selected != null){
      this.board.performMove(this.selected, [x,y])
      this.selected = null;
    }else if(this.board.friendAt([x,y])){
      this.selected = [x,y];
    }
  }

  deselect(x,y){
    this.selected = null;
  }

  highlightBoard(array, toHighlight){
    for(let ii = 0; ii < toHighlight.length; ii++){
      array[toHighlight[ii][0]][toHighlight[ii][1]].highlight = true;
    }

    return array;
  }


  getImageBoard(){
    let piecenames = {
      'R' : 'castle',
      'B' : 'bishop',
      'N' : 'horse',
      'K' : 'king',
      'Q' : 'queen',
      'PW' : 'pawn',
      'PB' : 'pawn',
    }

    const transformedBoard = this.board.transformBoard(function(el){
      //console.log("processing", el);
      if(el == null){
        return {
          src : '',
          highlight: false
        }
      }else{
        return {
          src : 'assets/pieces/'+(el.isWhite() ? 'w_' : 'b_') + piecenames[el.type] + '.svg',
          highlight : false
        }
      }
    }).grid;
    if(this.selected != null){
      this.highlightBoard(transformedBoard, this.board.generateMoveList(this.selected));
    }
    return transformedBoard;
  }

}
