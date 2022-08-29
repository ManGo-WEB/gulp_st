const gulp = require("gulp"),
	autoprefixer = require("gulp-autoprefixer"),
	cssbeautify = require("gulp-cssbeautify"),
	removeComments = require('gulp-strip-css-comments'),
	rename = require("gulp-rename"),
	sass = require("gulp-sass"),
	cssnano = require("gulp-cssnano"),
	rigger = require("gulp-rigger"),
	uglify = require("gulp-uglify"),
	watch = require("gulp-watch"),
	plumber = require("gulp-plumber"),
	imagemin = require("gulp-imagemin"),
	run = require("run-sequence"),
	rimraf = require("rimraf"),
	webserver = require("browser-sync");

/* Paths to source/build/watch files */

const path = {
	build: {
		html: "build/",
		js: "build/assets/js/",
		css: "build/assets/css/",
		img: "build/assets/i/",
		fonts: "build/assets/fonts/"
	},
	src: {
		html: "src/*.{htm,html}",
		js: "src/assets/js/*.js",
		css: "src/assets/sass/style.scss",
		img: "src/assets/i/**/*.*",
		fonts: "src/assets/fonts/**/*.*"
	},
	watch: {
		html: "src/**/*.{htm,html}",
		js: "src/assets/js/**/*.js",
		css: "src/assets/sass/**/*.scss",
		img: "src/assets/i/**/*.*",
		fonts: "src/assets/fonts/**/*.*"
	},
	clean: "./build"
};

