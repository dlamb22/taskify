import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

// let name: any;
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];

// let printName: (name: string) => never;

// let personName: unknown;

// interface Person {
// 	name: string;
// 	age?: number;
// }

// interface Guy extends Person {
// 	profession: string;
// }

// type X = {
// 	a: string;
// 	b: number;
// };

// type Y = X & {
// 	c: string;
// 	d: number;
// };

// missing a, b
// let y: Y = {
// 	c: 'efd',
// 	d: 42,
// };

// function printName(name: string) {
// 	console.log(name);
// }

// printName('dom');
// role = [10, 'tim'];

// type Person = {
// 	name: string;
// 	age?: number;
// };

// let person: Person = {
// 	name: 'Dom',
// };

// let lotsOfPeople: Person[];

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('');
	const [todos, setTodos] = useState<Todo[]>([]);

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault();

		if (todo) {
			setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
			setTodo('');
		}
	};

	return (
		<div className="App">
			<header className="heading">Taskify</header>
			<InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default App;
