const pages = {
    upload: require('./routes/upload'),
    grouping: require('./routes/grouping'),
    set: require('./routes/set'),
    main: require('./routes/main'),
};

const publicApi = {
    convertCode: require('./routes/convertCode'),
    battleProcess: require('./routes/battleProcess'),
};
module.exports = {
    pages,
    publicApi,
};
