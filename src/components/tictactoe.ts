import {DidactComponentBase, Observable, Computed} from "../didact/componentbase";
import html from "./tictactoe.html";

class TicTacToeGame extends DidactComponentBase {
    currentPlayer: Observable<string>;
    message: Computed<string>;
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
    }

    resetGame = (ev:Event): void => {
        this.cells.forEach((cell) => {
            cell.value = "";
        });
        this.currentPlayer.value = "X";
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