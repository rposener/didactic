import {DidactComponentBase, Observable, Computed} from "../didact/componentbase";
import html from "./tictactoe.html";

class TicTacToeGame extends DidactComponentBase {
    /** X or O */
    currentPlayer: Observable<string>;
    /** Who's Turn is it? */
    message: Computed<string>;
    /** Our Cells */
    cells: Array<Observable<string>>;
    constructor() {
        super("tictactoe-template", html);
        this.currentPlayer = new Observable("X");
        this.message = new Computed(() => `${this.currentPlayer.value}'s Turn!`, [this.currentPlayer]);
        this.cells = [];
        for(let c=0;c<9;c++) {
            this.cells.push(new Observable(""));
        }
    }

    connectedCallback(): void {
        const board = this.shadowRoot.querySelector(".ttt-board") as HTMLDivElement;
        board?.addEventListener("click", this.userPicked);
        const resetButton = this.shadowRoot.querySelector(".resetGame") as HTMLButtonElement;
        resetButton?.addEventListener("click", this.resetGame);
        this.applyBindings();
    }

    userPicked = (ev:Event): void => {
        const btn = ev.target as HTMLButtonElement;
        if (btn.classList.contains("gameCell")){
            this.cells[btn.value].value = this.currentPlayer.value;
            if (this.currentPlayer.value === "X") {
                this.currentPlayer.value = "O";
            } else {
                this.currentPlayer.value = "X";
            }
        }
        this.checkForWins();
    }

    resetGame = (ev:Event): void => {
        this.cells.forEach((cell) => {
            cell.value = "";
        });
        this.currentPlayer.value = "X";
    }

    checkForWins() : void {
        /**
         * Winning Combos are 1,2,3|4,5,6|7,8,9|1,5,9|3,5,7|1,4,7|2,5,8|3,6,9
         */
        const wins = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [1,5,9],
            [3,5,7],
            [1,4,7],
            [2,5,8],
            [3,6,9]
        ];
        let winner;
        wins.forEach((combo) => {
            const a = this.cells[combo[0]-1].value;
            const b = this.cells[combo[1]-1].value;
            const c = this.cells[combo[2]-1].value;
            if (a && b && c && a == b && b == c) {
                winner = a;
            }
        });
        if (winner) {
            setTimeout(function() {
                alert(`Congratulations! ${winner} has won the game.`);
            }, 15);
        }
    }

    disconnectedCallback(): void {
        const board = this.shadowRoot.querySelector(".ttt-board") as HTMLDivElement;
        board?.removeEventListener("click", this.userPicked);
        const resetButton = this.shadowRoot.querySelector(".resetGame") as HTMLButtonElement;
        resetButton?.removeEventListener("click", this.resetGame);
        this.removeBindings();
    }
}

customElements.define("didact-tictactoe", TicTacToeGame);