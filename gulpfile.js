const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

buildStyles = () => {
  return src(["./styles/sass/index.scss", "./styles/sass/responsive.scss"])
    .pipe(sass())
    .pipe(dest(`./styles/css`));
};

const watchChange = () => {
  watch(["styles/sass/index.scss", "styles/sass/responsive.scss"], buildStyles);
};

exports.default = series(buildStyles, watchChange);
