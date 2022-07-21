import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
	const [user, setUser] = useState([]);

	useEffect(() => {
		fetchApi();
	}, []);

	const handleDelete = (id) => {
		const newlist = user.filter((i) => i.id !== id);
		setUser(newlist);
	};

	const fetchApi = () => {
		axios
			.get('https://jsonplaceholder.typicode.com/todos/')
			.then((response) => {
				console.log(response);
				setUser(response.data);
			});
	};

	return (
		<div className='App'>
			<h1>Hello World</h1>

			{/* fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => console.log(json)) */}

			<button onClick={fetchApi}> Get</button>

			<div>
				{user.map((value) => {
					return (
						<div
							onClick={() => {
								handleDelete(value.id);
							}}
							key={value.id}
						>
							<h1>{value.title}</h1>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
