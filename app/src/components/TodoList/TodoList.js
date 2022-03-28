import TodoItem from "../TodoItem/TodoItem"

const TodoList = ({todos1, todos2}) => {

    return (
    <div className="card">
    {/* Выводим картинку */}
        <div>

        </div>   
    {/* Выводим 1-й input */}
            <div>
                {
                    todos1.map((todo1) => {
                        return (
                            <TodoItem id={todo1.id} title1={todo1.title1} completed={todo1.completed} />
                        )
                    })

                }
                {/* {
                    todos2.map((todo2) => {
                        return (
                            <TodoItem id={todo2.id} title2={todo2.title2} completed={todo2.completed} />
                        )
                    })
                } */}
            </div>

    </div>

    )
}
export default TodoList