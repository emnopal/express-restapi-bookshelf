import BookModel from '../models/bookModel.js';

const insertHandler = (body) => {
    return new BookModel({
        name: body.name,
        year: parseInt(body.year),
        author: body.author,
        summary: body.summary,
        publisher: body.publisher,
        pageCount: parseInt(body.pageCount),
        readPage: parseInt(body.readPage),
        isFinished: body.isFinished ?
            body.isFinished : body.readPage === body.pageCount,
        isReading: body.isReading,
    });
};

export default insertHandler;
