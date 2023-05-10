import { defineStore } from "pinia";

export type Todo = {
  id: number;
  content: string;
  status: (typeof TODO_STATUSES)[number];
};

export const TODO_STATUSES = ["done", "in progress"] as const;

function generateTodoId(): number {
  return Date.now();
}

export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos: [] as Todo[],
    todoToRemove: {
      id: -1,
    },
    isRemoveModalOpen: false,
    todoToUpdate: {
      id: -1,
      content: "",
      status: "in progress",
    } as Todo,
    isUpdateModalOpen: false,
  }),
  actions: {
    openRemoveModal(id: Todo["id"]) {
      console.log("open");
      this.todoToRemove.id = id;
      this.isRemoveModalOpen = true;
    },
    closeRemoveModal() {
      this.todoToRemove.id = -1;
      this.isRemoveModalOpen = false;
    },
    openUpdateModal(data: Todo): void {
      this.todoToUpdate = { ...data };
      this.isUpdateModalOpen = true;
    },
    closeUpdateModal(): void {
      this.todoToUpdate = {
        id: -1,
        content: "",
        status: "in progress",
      };
      this.isUpdateModalOpen = false;
    },
    addTodo(data: Omit<Todo, "id">): void {
      const id = generateTodoId();

      const newTodo: Todo = {
        id,
        content: data.content,
        status: data.status,
      };

      this.todos.unshift(newTodo);
    },
    removeTodo(id: Todo["id"]): void {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    updateTodo(id: Todo["id"], data: Omit<Todo, "id">): void {
      const todo = this.todos.find((todo) => todo.id === id);

      if (!todo) {
        return;
      }

      todo.status = data.status ?? todo.status;
      todo.content = data.content ?? todo.content;
    },
  },
});
