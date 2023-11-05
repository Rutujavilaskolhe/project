import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./TodoList.module.css";
import { BsTrash3 } from "react-icons/bs";
import { addTodo, removeTodo } from "../../actions/index";

const TodoList = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
const list = useSelector((state)=>state.todoReducer.list)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.todo}>
          <input
            type="text"
            placeholder="add item"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button onClick={() => dispatch(addTodo(input), setInput(""))}>
            Add to list
          </button>
          <button onClick={() => dispatch(removeTodo(input))}>Clear All</button>
        </div>
        <div className={styles.stylelist}>
        
          <div className={styles.eachitem}>
            <h3>{list}</h3>
            <span>
              <BsTrash3 />
            </span>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default TodoList;
