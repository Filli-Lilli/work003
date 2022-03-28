import TodoList from "../TodoList/TodoList"

// С помощью деструктуризации предаем аргументы todos
const Main = ({todos1, todos2}) => {
    return (
        <div>
            <TodoList todos1={todos1} todos2={todos2} />     
        </div>
    )
}
// Добавление второго компонента на премере обычной функции (не стрелочной функции)
function AnotherComponentInMain () {
    return (
        <div>
            {/* AnotherComponentInMain         */}
        </div>
    )
}
// Пример как экспортировать два компонента:
export { 
    Main,
    AnotherComponentInMain
}