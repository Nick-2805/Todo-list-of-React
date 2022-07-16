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
        ],
        term: '',
        filterValue: 'all' // active, all, done
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
        // const newItem = {
        //     label: text,
        //     important: false,
        //     id: this.maxId++
        // }
        const newItem = this.createTodoItem(text)

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

    toggleProperty(arr, id, propName) {

        const ind = arr.findIndex((el) => el.id === id);
        //1. update obj
        const oldItem = arr[ind];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        //2. construct newArr
        return [
            ...arr.slice(0, ind),
            newItem,
            ...arr.slice(ind + 1)

        ]
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            //     const ind = todoData.findIndex((el) => el.id === id);
            //     //1. update obj
            //     const oldItem = todoData[ind];
            //     const newItem = { ...oldItem, done: !oldItem.done};
            //
            //     //2. construct newArr
            //     const newArr = [
            //         ...todoData.slice(0, ind),
            //         newItem,
            //         ...todoData.slice(ind + 1)
            //     ];
            //     return {
            //         todoData: newArr
            //     };
            //--------------------- или -------------------------------
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    onSearchChange1 = (term) => {
        this.setState({term});
    }

    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        })
    }

    filter(items, filterValue) {
        switch (filterValue) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    onFilterChange = (filterValue) => {
        this.setState({filterValue});
    }

    render() {
        const {todoData, term, filterValue} = this.state

        // const visibleItems = this.search(todoData, term);
        const visibleItems = this.filter(this.search(todoData, term), filterValue);

        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader
                    toDo={todoCount}
                    done={doneCount}
                />
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchChangeFromApp={this.onSearchChange1}
                    />
                    <ItemStatusFilter
                        filterValue={filterValue}
                        onFilterChange={this.onFilterChange}/>
                </div>
                <TodoList
                    // todos={this.state.todoData}
                    todos={visibleItems}
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

