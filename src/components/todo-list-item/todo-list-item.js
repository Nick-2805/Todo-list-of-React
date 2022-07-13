import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
    //Добавляем функцию через конструктор
    // constructor() {
    //     super();
    //     this.onLabelClick = () => console.log(`Done: ${this.props.label}`)
    // }

    //или через поля класса

    // state = {
    //     done: false,
    //     important: false
    // }
    //
    //
    // onLabelClick = () => {
    //     this.setState(({done}) => {
    //         return {
    //             done: !done
    //         }
    //     })
    // }
    // onMarkImportant = () => {
    //     this.setState(({important}) => {
    //         return {
    //             important: !important
    //         }
    //     })
    // }

    render() {
        const {label, done, important, onDeleted, onToggleImportant, onToggleDone} = this.props

        let classNames = "todo-list-item"

//----получаем значения из объекта state---------
//         const {done, important} = this.state

//---------условия для изменения state------------
        if (done) {
            classNames += ' done'
        }

        if (important) {
            classNames += ' important'
        }
//-------------------------------------------------


        return (
            <span className={classNames}>
      <span
          className='todo-list-item-label'
          onClick={onToggleDone}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-end"
              onClick={onToggleImportant}>
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-end"
      onClick={onDeleted}>
        <i className="fa fa-trash-o"/>
      </button>
    </span>
        );
    }
}


// const TodoListItemFunc = ({ label, important = false }) => {
//
//   const style = {
//     color: important ? 'steelblue' : 'black',
//     fontWeight: important ? 'bold' : 'normal'
//   };
//
//   return (
//     <span className="todo-list-item">
//       <span
//         className="todo-list-item-label"
//         style={style}>
//         {label}
//       </span>
//
//       <button type="button"
//               className="btn btn-outline-success btn-sm float-end">
//         <i className="fa fa-exclamation" />
//       </button>
//
//       <button type="button"
//               className="btn btn-outline-danger btn-sm float-end">
//         <i className="fa fa-trash-o" />
//       </button>
//     </span>
//   );
// };

// export default TodoListItem;
