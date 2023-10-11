import { useState } from "react";

export type Todo = {
  id: number;
  text: string;
};

export const Example = () => {
  // 入力値
  const [inputText, setInputText] = useState("");
  // TodoList
  const [todos, setTodos] = useState<Todo[]>([
    { id: 0, text: "Todo1" },
    { id: 1, text: "Todo2" },
  ]);

  // e: React.ChangeEvent<HTMLInputElement>
  // 入力値の変更処理
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputText(e.target.value);

  // Todo新規登録処理
  const addInputItem = () => {
    setTodos((state) => [...state, { id: state.length, text: inputText }]);
    setInputText("");
  };

  return (
    <>
      <input type="text" value={inputText} onChange={changeHandler} />
      <button onClick={addInputItem}>追加</button>
    </>
  );
};
