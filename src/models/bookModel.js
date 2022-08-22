import bookSchema from '../schemas/bookSchema.js';
import mongoose from 'mongoose';
import {schema} from '../configs/environment.js';

const BookModel = new mongoose.model(schema ?? 'books', bookSchema);

export default BookModel;
