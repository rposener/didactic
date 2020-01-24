import { DidactComponentBase, Observable, serverJson, Computed } from "../didact/componentbase";
import html from "./todo.html";

class TodoList extends DidactComponentBase {
    data: TodoItem[];
    todoItems: Observable<Array<TodoItem>>;
    todoCount: Computed<string>;
    sort:"" | "asc" | "desc";
    completeHidden:boolean;
    constructor(){
        super("todo-list-template", html);
        this.todoItems = new Observable([]);
        this.sort = "";
        this.completeHidden = false;
        this.todoCount = new Computed(() => {
            return this.todoItems.value.length.toString();
        }, [this.todoItems]);
    }

    connectedCallback() {
        this.applyBindings();
        const sortBtn = this.shadowRoot.querySelector(".todo-sort");
        sortBtn?.addEventListener("click", this.sortTodos);
        const hideBtn = this.shadowRoot.querySelector(".todo-hide");
        hideBtn?.addEventListener("click", this.toggleCompleted);
        this.loadTodos();
    }

    async loadTodos(): Promise<void> {
        // Load Data
        const req = new Request('http://jsonplaceholder.typicode.com/todos', {
            method: 'GET',
            cache: 'no-store'
        });
        const serverTodos = await serverJson<ITodoItem[]>(req);
        this.data = serverTodos.map((todo) => new TodoItem(todo))
        this.todoItems.value = this.data.slice();
    }

    sortTodos = (ev: Event): void => {
        switch(this.sort) {
            case "asc":
                this.sort = "desc";
                break;
            default:
                this.sort = "asc";
        }
        if (this.sort === "asc") {
            this.todoItems.value.sort(function(a, b) {
                return a.todoTitle.value.localeCompare(b.todoTitle.value);
            });
        } else {
            this.todoItems.value.sort(function(a, b) {
                return b.todoTitle.value.localeCompare(a.todoTitle.value);
            });
        }
        this.todoItems.notify();
    }

    toggleCompleted = (ev: Event): void => {
        this.completeHidden = !this.completeHidden;
        if (this.completeHidden) {
            this.todoItems.value = this.todoItems.value.filter(function(item) {
                return !item.completed.value;
            });
        } else {
            // Get the completed items not in the list back
            const toAdd = this.data.filter(i => i.completed && this.todoItems.value.indexOf(i) == -1);
            // Add to the end
            this.todoItems.value.splice(this.todoItems.value.length,0,...toAdd);
        }
        this.todoItems.notify();
    }

    disconnectedCallback(): void {
        this.removeBindings();
        const sortBtn = this.shadowRoot.querySelector(".todo-sort");
        sortBtn?.removeEventListener("click", this.sortTodos);
        const hideBtn = this.shadowRoot.querySelector(".todo-hide");
        hideBtn?.removeEventListener("click", this.toggleCompleted);
    }
}

class TodoItem extends DidactComponentBase {
    todoTitle: Observable<string>;
    completed: Observable<boolean>;
    constructor(item: ITodoItem) {
        super("todo-item-template");
        this.todoTitle = new Observable(item.title);
        this.completed = new Observable(item.completed);
    }

    connectedCallback() : void {
        this.applyBindings();
    }

    disconnectedCallback(): void {
        this.removeBindings();
    }
}

interface ITodoItem {
    completed:boolean;
    title: string;
}

customElements.define("todo-list", TodoList);
customElements.define("todo-item", TodoItem);