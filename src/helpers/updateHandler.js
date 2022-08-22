const updateHandler = (body) => {
    const updateParams = {};
    if (body.name) {
        updateParams.name = body.name;
    }
    if (body.year) {
        updateParams.year = parseInt(body.year);
    }
    if (body.author) {
        updateParams.author = body.author;
    }
    if (body.summary) {
        updateParams.summary = body.summary;
    }
    if (body.publisher) {
        updateParams.publisher = body.publisher;
    }
    if (body.pageCount) {
        updateParams.pageCount = parseInt(body.pageCount);
    }
    if (body.readPage) {
        updateParams.readPage = parseInt(body.readPage);
    }
    if (body.isReading) {
        updateParams.isReading = body.isReading;
    }
    updateParams.updatedAt = new Date().toISOString();

    return updateParams;
};

export default updateHandler;
