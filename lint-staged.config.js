module.exports = {
  // eslint格式化代码
  'packages/**/*.js': (filenames) => [`eslint ${filenames.join(' ')}`],
};
