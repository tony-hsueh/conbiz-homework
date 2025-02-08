import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '學習 React', completed: false, studyPoint: 3 },
    { id: 2, text: '建立專案', completed: false, studyPoint: 1 }
  ]);
  // basePoints不確定需要用在哪裡，所以先移除

  // sumPoints的計算因為與todos有關，因此沒必要多使用useState來處理
  const sumPoints = todos.reduce((acc, cur) => acc + cur.studyPoint, 0)

  // 原寫法直接修改陣列中的物件，會造成React無法偵測到該物件有變化，所以不會重新渲染
  const toggleTodo = (id) => {
    const newTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : {...todo})
    setTodos(newTodos)
  };
  // 原寫法basePoints()、value1使用不正確
  const handleStudyPointsChange = (e, id) => {
    if (e.target.value === '') return;
    const newTodos = todos.map(todo => todo.id === id ? {...todo, studyPoint: parseInt(e.target.value)} : {...todo})
    setTodos(newTodos)
  };
  return <>
    {todos.map(todo=> (
      <div key={todo.id}>
        <p>課程名稱: {todo.text}</p>
        <label>學習點數: </label>
        <input 
          type="number" 
          value={todo.studyPoint} 
          onChange={(e) => handleStudyPointsChange(e, todo.id)} 
        />
        
        <button onClick={() => toggleTodo(todo.id)}>篩選課程</button>
      </div>
    ))}
    <hr />
    <p>總累積點數: {sumPoints}</p>
  </>
}
 
export default App;