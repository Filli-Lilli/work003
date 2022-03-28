const TodoItem = ({title1, title2}) => {

    return (
        <div>
          <h5 className="card-title">Заголовок: {title1}</h5> {/* Выводим 1-й input */}
          <p className="card-text">текст: {title2}</p> {/* Выводим 2-й input */}
          <button type="button" className="btn btn-danger">Удалить</button>
        </div>
    )
}

export default TodoItem
