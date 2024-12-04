import express from 'express';
import { env } from './env';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen({ port: env.PORT }, () => {
	return console.log(`Express is listening at http://localhost:${env.PORT}`);
});
