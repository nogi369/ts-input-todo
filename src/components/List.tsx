// リスト表示

import { FC } from "react";
//型のみインポートするのを明示的に書く方法
import type { Todo } from "./Todo";

type TaskListProps = {
  todos: Todo[];
};

export const TaskList: FC<TaskListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
    </ul>
  );
};
