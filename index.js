const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 8080;

app.use(express.json());

app.get('/posts', async (req, res) => {
	let data = await fetch('https://jsonplaceholder.typicode.com/posts');
	let json = await data.json();

	res.status(200).send({ success: true, data: json });
});

app.get('/post/:id', async (req, res) => {
	const { id } = req.params;

	let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	let json = await data.json();

	res.status(200).send({ success: true, data: json });
})

app.post('/post/:id', async (req, res) => {
	const { data } = req.body;

	if (!data) {
		res.status(400).send({ success: false, message: 'No existe datos!'});
	} else {
		let post = await fetch('https://jsonplaceholder.typicode.com/posts', {
		  method: 'POST',
		  body: JSON.stringify(data),
		  headers: {
		    'Content-type': 'application/json; charset=UTF-8',
		  },
		});
		let json = await post.json();

		res.status(200).send({ success: true, data: json });
	}
})

app.put('/post/:id', async (req, res) => {
	const { id } = req.params;
	const { data } = req.body;

	if (!data) {
		res.status(400).send({ success: false, message: 'No existe datos!'});
	} else {
		let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		  method: 'PUT',
		  body: JSON.stringify(data),
		  headers: {
		    'Content-type': 'application/json; charset=UTF-8',
		  },
		});
		let json = await post.json();

		res.status(200).send({ success: true, data: json });
	}
})

app.patch('/post/:id', async (req, res) => {
	const { id } = req.params;
	const { data } = req.body;

	if (!data) {
		res.status(400).send({ success: false, message: 'No existe datos!'});
	} else {
		let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		  method: 'PATCH',
		  body: JSON.stringify(data),
		  headers: {
		    'Content-type': 'application/json; charset=UTF-8',
		  },
		});
		let json = await post.json();

		res.status(200).send({ success: true, data: json });
	}
})

app.delete('/post/:id', async (req, res) => {
	const { id } = req.params;

	let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
	  method: 'DELETE',
	});
	let json = await response.json();

	res.status(200).send({ success: true, data: json });
})

app.listen(port, () => console.log(`http://localhost:${port}`));