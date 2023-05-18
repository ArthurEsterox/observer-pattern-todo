// app
import app from './app.js';

// subjects
import { RenderTodos } from './events/subjects.js';

// init
app.init();

RenderTodos.fire();
