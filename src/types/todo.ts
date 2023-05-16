export type TodoInputType = {
  todo: string;
};

export type TodoType = {
  createdAt: Date;
  id: string;
  title: string;
  updatedAt: Date;
};

export type TodoListType = TodoType[];
