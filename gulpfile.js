var gulp = require('gulp'),
    url = require('url'),
    sass = require('gulp-sass'), //引入sass插件
    browserSync = require('browser-sync'), //引入browser-sync插件
    proxy = require('proxy-middleware'), //引入代理插件
    useref = require('gulp-useref'), //引入gulp-useref插件，合并js、css
    uglify = require('gulp-uglify'), //引入gulp-uglify插件，压缩js
    minifyCSS = require('gulp-minify-css'), //引入gulp-minify-css插件，压缩css
    imagemin = require('gulp-imagemin'), //引入gulp-imagemin插件，压缩图片
    gulpCache = require('gulp-cache'), //引入gulp-cache插件，压缩图片减少重复压缩
    gulpIf = require('gulp-if'), //引入gulp-if插件
    del = require('del'), //引入del插件,清理文件
    runSequence = require('run-sequence'), //引入run-sequence插件,顺序执行任务
    bower = require('gulp-bower'); //引入bower插件

var gulpApp = {
    port: 3000,
    app: 'src/',
    dist: 'dist/',
    tmp: '.tmp/',
    path: {
        script: 'script/',
        scss: 'scss/',
        css: 'css/',
        image: 'image/',
        font: 'font/',
        vendor: 'vendor/',
        template: 'template/',
        index: 'index.html'
    }
};

gulpApp.srcPath = {
    script: gulpApp.app + gulpApp.path.script,
        scss: gulpApp.app + gulpApp.path.scss,
        css: gulpApp.app + gulpApp.path.css,
        font: gulpApp.app + gulpApp.path.font,
        image: gulpApp.app + gulpApp.path.image,
        template: gulpApp.app + gulpApp.path.template
};

gulpApp.distPath = {
    script: gulpApp.dist + gulpApp.path.script,
        scss: gulpApp.dist + gulpApp.path.scss,
        css: gulpApp.dist + gulpApp.path.css,
        font: gulpApp.dist + gulpApp.path.font,
        image: gulpApp.dist + gulpApp.path.image,
        template: gulpApp.dist + gulpApp.path.template
};

gulpApp.srcFileRegex = {
    script: [gulpApp.srcPath.script+ '**/*.js', gulpApp.srcPath.script + '*.js'],
        scss: [gulpApp.srcPath.scss + '**/*.scss'],
        css: [gulpApp.srcPath.css + '**/*.css'],
        font: [gulpApp.srcPath.font + '**/*'],
        image: [gulpApp.srcPath.image + '**/*.+(png|jpg|gif|svg)'],
        template: [gulpApp.srcPath.template + '**/*.html', gulpApp.srcPath.template + '*.html']
};

//sass编译任务
gulp.task('sass', function(){
   return gulp.src(gulpApp.srcFileRegex.scss)
       .pipe(sass())
       .pipe(gulp.dest(gulpApp.srcPath.css))
       .pipe(browserSync.reload({
           stream: true
       }))
});

//bower依赖下载任务
gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(gulpApp.srcPath.vendor));
});

//合并js、压缩js
gulp.task('useref', function(){
    return gulp.src(gulpApp.app + gulpApp.path.index)
        .pipe(gulpIf('*.css', minifyCSS()))
        .pipe(gulpIf('*.js', uglify()))
        .pipe(useref())
        .pipe(gulp.dest(gulpApp.dist));
});

//压缩图片
gulp.task('image', function(){
    return gulp.src(gulpApp.srcFileRegex.image)
        .pipe(gulpCache(imagemin({
            interlaced:true
        })))
        .pipe(gulp.dest(gulpApp.distPath.image))
});

//清理文件
gulp.task('clean', function(){
    del(gulpApp.dist);
});

//复制字体
gulp.task('copy:font', function () {
    return gulp.src(gulpApp.srcFileRegex.font)
        .pipe(gulp.dest(gulpApp.distPath.font));
});

//浏览器自动刷新
gulp.task('browserSync', function(){
    browserSync({
        server:{
            baseDir: gulpApp.app,
            index: gulpApp.path.index
        },
        browser: ["firefox"],
        ghostMode:false,
        notify: false
    });
});

//文件监听任务
gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch(gulpApp.srcFileRegex.scss, ['sass']);
    gulp.watch(gulpApp.app + gulpApp.path.index, browserSync.reload);
    gulp.watch(gulpApp.srcFileRegex.template, browserSync.reload);
    gulp.watch(gulpApp.srcFileRegex.script, browserSync.reload);
});


//打包任务
gulp.task('build', function(callback){
    console.log('Building files...');
    runSequence('clean', ['sass', 'useref', 'images'], callback);
    console.log('Building success!');
});

//默认任务
gulp.task('default', function(callback){
    runSequence(['sass', 'browserSync', 'watch'], callback);
});