import { ResteX } from '@reste/x';
import express from 'express';
import { HomeController } from './controllers/HomeController';
import { NoteController } from './controllers/NoteController';

const app = express();
const port = process.env.PORT || 8080;

ResteX.createApp(app, [HomeController, NoteController]);

app.listen(port, () => console.log(`Server started at port ${port}`));

app.on('error', (error: any) => console.log('Error:', error));
