export type TodoInputType = {
  title: String;
};

export type TodoType = {
  createdAt: Date;
  id: string;
  title: string;
  updatedAt: Date;
};

export type TodoListType = TodoType[];
