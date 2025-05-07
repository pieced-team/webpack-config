exports.NODE_ENV = process.env.NODE_ENV;
exports.IS_DEV = exports.NODE_ENV === 'development';
exports.IS_PROD = exports.NODE_ENV === 'production';
exports.IS_ENV_NORMAL = exports.IS_DEV || exports.IS_PROD;
