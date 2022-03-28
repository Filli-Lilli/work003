import Form from "../Form/Form" /* Импортируем файл Form.js  */
// Задаем стрелочную функцию для передачи в браузер разметки нашего проекта
const Header = ({addNewTodo1, addNewTodo2}) => {
    
    return (
        <header>
            <Form addNewTodo1={addNewTodo1} addNewTodo2={addNewTodo2} />     {/* пробрасываем данные из файл Form.js в Header.js */}  
        </header>
    )
}
// Экспортируем Header по дефолту. По дефолту можно экспортировать только один компонент
export default Header