import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    pageCount: {
        type: Number,
        required: true,
    },
    readPage: {
        type: Number,
        required: true,
    },
    isFinished: {
        type: Boolean,
        default: false,
    },
    isReading: {
        type: Boolean,
        default: false,
    },
    insertedAt: {
        type: Date,
        default: new Date().toISOString(),
    },
    updatedAt: {
        type: Date,
        default: new Date().toISOString(),
    },
});

export default bookSchema;
