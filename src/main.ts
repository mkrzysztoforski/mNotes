import { ResteX } from '@reste/x';
import { HomeController } from './controllers/HomeController';
import { NoteController } from './controllers/NoteController';

const express = require('express');
const app = express();

ResteX.createApp(app, [HomeController, NoteController]);

app.listen(8080, () => console.log('Server started at port 8080'));

app.on('error', (error: any) => console.log('Error:', error));
