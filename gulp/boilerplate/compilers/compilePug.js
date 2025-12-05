// Gulp Compile Pug
const gulp = require('gulp');
const config = require('../config');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const path = require('path');

module.exports = (source, out, pugop = { pretty: true }) => {
  return gulp.src(source)
    .pipe(pug(pugop))
    .pipe(rename(function (filePath) {
      // If the file is not index.pug, move it into a folder and rename to index.html
      if (filePath.basename !== 'index') {
        filePath.dirname = path.join(filePath.dirname, filePath.basename);
        filePath.basename = 'index';
      }
    }))
    .pipe(gulp.dest(out));
};
