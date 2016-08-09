const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-clean-css')
const rename = require('gulp-rename')
const header = require('gulp-header')

const pkg = require('./package.json')
const banner =
`/*!
 * ${pkg.name} - ${pkg.description}
 * @version v${pkg.version}
 * @license ${pkg.license}
 */
`

gulp.task('prefix-min', ['prefix'], () =>
  gulp.src('./dist/flex.class.css')
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'))
)

gulp.task('prefix', () =>
  gulp.src('./flex.class.css')
    .pipe(header(banner))
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(gulp.dest('dist'))
)

gulp.task('default', ['prefix-min'])
