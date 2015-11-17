module.exports = function() {
  var client = './src/client/';

  var config = {
    temp: './.tmp',

    /*
    * Files paths
    */
    alljs: [
      './src/**/*.js',
      './gulp/**/*.js',
      './*.js',
    ],

    less: client + 'styles/styles.less',
  };

  return config;
};
