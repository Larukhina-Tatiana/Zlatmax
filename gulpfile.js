const { src, dest, watch, parallel, series } = require("gulp");
// конвертация sass-css
const scss = require("gulp-sass")(require("sass"));

//переименование и объединиение сжатие css
const concat = require("gulp-concat");
// сжатие js
const uglify = require("gulp-uglify-es").default;
// добавление префиксов в старіе версии браузеров
const autoprefixer = require("gulp-autoprefixer");
// очистка папок
const clean = require("gulp-clean");
//  сжатие и конвертация картинок
const avif = require("gulp-avif");
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const svgSprite = require("gulp-svg-sprite");

// Конвертер шрифтов
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");

const include = require("gulp-include");

function fonts() {
  return src("app/fonts/src/*.*")
    .pipe(
      fonter({
        formats: ["woff", "ttf"],
      })
    )
    .pipe(src("app/fonts/*.ttf"))
    .pipe(ttf2woff2())
    .pipe(dest("app/fonts"));
}

// function includeh() {
//   return src( "app/*.html")
//     .pipe(
//       include({
//         includePaths: "app/html"
//       })
//     )
//     .pipe(dest("app"));
// }


function styles() {
  // return src("app/scss/style.scss")
  return src("app/scss/style.scss")
    .pipe(concat("style.min.css"))
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(dest("app/css"))
    .pipe(autoprefixer({
      overrideBrowsersList: ["last 10 version"],
      grid: true
  }));
}

function scripts() {
  return src([
    "node_modules/swiper/swiper-bundle.js",
    "app/js/main.js",

    // Для подключения многих (всех) файлов js? Обязательно исключать main.min.js
    // 'app/js/*.js',
    // '!app/js/main.min.js'
  ])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"));
}

function images() {
  // return src(["app/images/**/*.*", "!app/images/**/*.svg"])
  return (
    src(["app/images/src/*.*", "!app/images/src/*.svg"])
      // .pipe(newer("app/images"))
      // .pipe(avif({ quality: 50 }))

      // .pipe(src("app/images/**/*.*"))
      .pipe(src("app/images/src/*.*"))
      .pipe(newer("app/images"))
      .pipe(webp())

      .pipe(src("app/images/src/*.*"))
      .pipe(newer("app/images"))
      .pipe(imagemin())

      .pipe(dest("app/images"))
  );
}

function sprite() {
  return src("app/images/*.svg")
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg",
            example: true,
          },
        },
      })
    )
    .pipe(dest("app/images"));
}

// функция удаления папок
function cleanDist() {
  return src("dist").pipe(clean("*.*"));
}

// функция переноса файлов в чистую папку для сдачи
function building() {
  // прописывать всё что есть - картинки, шрифты..
  return src(
    [
      "app/css/style.min.css",
      "app/js/main.min.js",
      "app/**/*.html",
      "app/fonts/*.*",
      "app/images/*.*",
      "!app/images/*.svg",
      "!app/images/stack",
      "app/images/sprite.svg",
    ],
    { base: "app" }
  ).pipe(dest("dist"));
}

// слешение за обновлениями файлов
function watching() {
  // watch(["app/*.html"], includeh);
  watch(["app/scss/*.scss", "app/scss/components/*.scss"], styles);
  watch(["app/images/**/*.*"], images);
  watch(["app/js/main.js"], scripts);
}

exports.fonts = fonts;
// exports.includeh = includeh;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.sprite = sprite;
exports.building = building;
exports.watching = watching;

exports.build = series(cleanDist, building);

exports.default = parallel(styles, images, scripts, watching);
