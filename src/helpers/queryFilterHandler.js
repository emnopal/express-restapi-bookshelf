const queryFilterHandler = (query) => {
    const queryCond = {};

    if (query.id) {
        queryCond._id = `ObjectId("${query.id}")`;
    }
    if (query.name) {
        queryCond.name = {$regex: query.name, $options: 'i'};
    }
    if (query.author) {
        queryCond.author = {$regex: query.author, $options: 'i'};
    }
    if (query.summary) {
        queryCond.summary = {$regex: query.summary, $options: 'i'};
    }
    if (query.publisher) {
        queryCond.publisher = {
            $regex: query.publisher, $options: 'i',
        };
    }
    if (query.year) {
        queryCond.year = query.year;
    }
    if (query.pageCount) {
        queryCond.pageCount = query.pageCount;
    }
    if (query.readPage) {
        queryCond.readPage = query.readPage;
    }
    if (query.isFinished) {
        queryCond.isFinished = query.isFinished === '1';
    }
    if (query.isReading) {
        queryCond.isReading = query.isReading === '1';
    }

    return queryCond;
};

export default queryFilterHandler;
