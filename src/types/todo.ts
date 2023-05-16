export type TodoInputType = {
  todo: String;
};

export type TodoType = {
  createdAt: Date;
  id: string;
  todo: string;
  updatedAt: Date;
};

export type TodoListType = TodoType[];
