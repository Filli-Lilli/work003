import './App.css';
import Header from './components/Header/Header';
// Пример экспорта двух компонентов
import { AnotherComponentInMain, Main } from './components/Main/Main';
import { useState } from 'react'; // Подключаем "следить за состоянием" к react

function App() {
// ======================== 1-й input ======================== 
  // Создаем "состояние" useState для первого input:
  const [todos1, setTodos1] = useState ([])

  const addNewTodo1 = (title1) => {
    setTodos1((prev) => [...prev, {
      id: Date.now(),
      title1,
      completed: false
    }])
  }
// ======================== 2-й input ========================
 // Создаем "состояние" useState для второго input:
  const [todos2, setTodos2] = useState([])
	const addNewTodo2 = (title2) => {
    setTodos2((prev) => [...prev, {
      id: Date.now(),
      title2,
      completed: false
    }])
  }
// ======================== 3-й input ========================


// ======================== ========= ========================

  return (
    <div className="py-5">
      <Header addNewTodo1={addNewTodo1} addNewTodo2={addNewTodo2} /> {/* Прокидываем состояния в Header.js */}
      <hr />
      <Main todos1={todos1} todos2={todos2} /> 
      <AnotherComponentInMain />
    </div>
  );
}

export default App;