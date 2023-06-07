const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('scripts', function() {
  // Объединяем и создаём читабельную версию общего файла скриптов
  gulp.src('./js/parts/*.js')
      .pipe(concat('modules.js'))
      .pipe(gulp.dest('./js/'));

  // Объединяем и создаём минифицированную версию общего файла скриптов
  return gulp.src('./js/parts/*.js')
      .pipe(concat('modules.js'))
      .pipe(uglify())
      .pipe(rename({ extname: '.min.js' })) // переименовываем в modules.min.js
      .pipe(gulp.dest('./js/'));
});

// Отслеживание изменений
gulp.task('watch', function () {
  gulp.watch('./js/parts/*.js', gulp.series('scripts'));
});


gulp.task('default', gulp.series('scripts', 'watch')); // задача по умолчанию, которая будет выполняться при запуске команды gulp
