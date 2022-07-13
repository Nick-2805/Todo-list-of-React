import React, {Component} from 'react';

// import ReactDOM from 'react-dom';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
    maxId = 100;
    //state ередается из App в качестве props в TodoList (см. ниже)

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
        ]
    };

    // === {label: 'Drink Coffee', important: false, id: 1},
    // === {label: 'Make Awesome App', important: true, id: 2},
    // === {label: 'Have a lunch', important: false, id: 3}

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++

        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const ind = todoData.findIndex((el) => el.id === id)
            const newArr = [
                ...todoData.slice(0, ind),
                ...todoData.slice(ind + 1)
            ]
            return {
                todoData: newArr
            }

        })
    }
    addItem = (text) => {
        //generate id ?
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        }

        //add element in array
        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ]
            return {
                todoData: newArr
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            const ind = todoData.findIndex((el) => el.id === id)
            //1. update obj
            const oldItem = todoData[ind]
            const newItem = { ...oldItem, done: !oldItem.done}

            //2. construct newArr
            const newArr = [
                ...todoData.slice(0, ind),
                newItem,
                ...todoData.slice(ind + 1)
            ]
            return {
                todoData: newArr
            }
        })
    }

    onToggleImportant = (id) => {
        console.log('Important', id)
    }


    render() {
        return (
            <div className="todo-app">
                <AppHeader
                    toDo={1}
                    done={3}
                />
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm
                    addItem={this.addItem}
                />
            </div>
        )
    }
}

