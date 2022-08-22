import BookModel from '../models/bookModel.js';
import failHandler from '../helpers/failHandler.js';
import successHandler from '../helpers/successHandler.js';
import queryFilterHandler from '../helpers/queryFilterHandler.js';
import insertHandler from '../helpers/insertHandler.js';
import updateHandler from '../helpers/updateHandler.js';

export const addBookHandler = async (request, response) => {
    const {body} = request;

    try {
        if (body.readPage > body.pageCount) {
            return failHandler({
                response,
                message: `read page is bigger than page count, ` +
                    `which is impossible`,
                statusCode: 400,
            });
        }

        const book = insertHandler(body);
        const result = await book.save();

        return successHandler({
            response: response,
            data: {
                success: result,
            },
            message: 'Success added book',
        });
    } catch (error) {
        console.log(error);
        return failHandler({
            response: response,
            data: {
                error: error,
            },
            message: 'Fail added book',
        });
    }
};

export const getBookHandler = async (request, response) => {
    const {id} = request.params;
    const {query} = request;

    try {
        let book;

        if (id) {
            book = await BookModel.findById(id).exec();
        } else {
            if (Object.keys(query).length !== 0) {
                const queryCond = queryFilterHandler(query);
                book = await BookModel.find(queryCond);
            } else {
                book = await BookModel.find().exec();
            }
        }

        const parseMsgSuccess =
            id ? `Success getting book` : 'Success get all book';

        return successHandler({
            response: response,
            data: {
                book: book,
            },
            message: parseMsgSuccess,
        });
    } catch (error) {
        const parseMsgFail =
            id ? `Fail getting book ${id}` : 'Fail get all book';

        return failHandler({
            response: response,
            data: {
                error: error,
            },
            message: parseMsgFail,
        });
    }
};

export const editBookHandler = async (request, response) => {
    const {id} = request.params;
    const {body} = request;

    const updatedData = updateHandler(body);

    const isNew = {
        new: true,
    };

    try {
        const result = await BookModel.findByIdAndUpdate(
            id, updatedData, isNew).exec();

        return successHandler({
            response: response,
            data: {
                result: result,
            },
            message: `Success change book`,
        });
    } catch (error) {
        return failHandler({
            response: response,
            data: {
                error: error,
            },
            statusCode: 404,
            message: `Failed to changing book, book not found`,
        });
    }
};

export const deleteBookHandler = async (request, response) => {
    const {id} = request.params;

    try {
        const result = await BookModel.findByIdAndDelete(id).exec();
        return successHandler({
            response: response,
            data: {
                result: result,
            },
            message: `Success deleting book`,
        });
    } catch (error) {
        return failHandler({
            response: response,
            data: {
                error: error,
            },
            statusCode: 404,
            message: `Failed to deleting book, book not found`,
        });
    }
};
