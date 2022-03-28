import { useState } from "react";
// const Form = ({addNewTodo1}, {addNewTodo2}) => {
const Form = ({addNewTodo1, addNewTodo2}) => {
    // Проверка вывода:
    // console.log('Form', addNewTodo1, addNewTodo2)
// ================== (3) Обрабатываем input (Управляющая форма) ==================
    // ==== Создаем второе новое состояние для 1-й input ==== 
    const [title1, setTitle1] = useState("")
// e - это получаемое событие, из события e.target.value дастаем значение input, и это значение устанавливаем в title1
    const changeHandler1 = (e) => {
        setTitle1(e.target.value);
    }
    
    // ==== Создаем второе новое состояние для 2-й input ==== 
    const [title2, setTitle2] = useState("")
    const changeHandler2 = (e) => {
        setTitle2(e.target.value);  
    }
	
	// ==== Создаем второе новое состояние для 3-й input ====
    
    // ================== отлавливаем события отправки формы всех input-ов ==================
        const submitHandler = (e) => {
            e.preventDefault()  // чтобы страница не перезагружалась
            addNewTodo1(title1) 
            addNewTodo2(title2)
            setTitle1('') 
            setTitle2('')
        }

// ================== ФОРМА ДЛЯ ВВОДА ДАННЫХ ==================
    // форма заменим все Class на ClassName
    return (
        <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
    {/* Заголовок */}        
            <div className="mb-3">
                <input 
                    // Добавим событие для input
                    onChange={changeHandler1} /* это событие происходит после каждого нажатия на клавишу */
                    type="text" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="Введите заголовок"
                    // значение input будет равняться title
                    value={title1} 
                />
            </div>
    {/* Ввод текста */}        
            <div className="mb-3">
                <textarea 
                    onChange={changeHandler2}
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    placeholder="Введите текст" 
                    rows="3"
                    value={title2}
                >
                </textarea>
            </div>
    {/* Добавление картинки */}    
            <div class="mb-3">
                <input 
                    
                    name="picture" 
                    placeholder="Cсылка на изображение" 
                    type="text" 
                    className="form-control"
                    
                />
            </div>
    {/* Кнопка */}
            <button type="submit" className="btn btn-primary">
              Add Todo
            </button>
        </form>
    );
};
// Экспортируем во внешний файл
export default Form;
