export type TodoInputType = {
  title: string;
};

export type TodoType = {
  createdAt: Date;
  id: string;
  title: string;
  updatedAt: Date;
};

export type TodoListType = TodoType[];
