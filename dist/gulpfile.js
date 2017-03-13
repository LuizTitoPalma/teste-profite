// Definimos o diretório dos arquivos para evitar repetição futuramente
// Todos os arquivos CSS que serão compactados
var css = [
 'css/*.css'
];
 
// Todos os arquivos JS que serão compactados
var js  = [
    'js/src/*',         // Todos os arquivos do diretório js
    //'js/dist/main.js'   // Arquivo único
];
 
// Núcleo do Gulp
var gulp = require('gulp');
 
// Transforma o javascript em formato ilegível para humanos
var uglify = require("gulp-uglify");
 
// Agrupa todos os arquivos em um
var concat = require("gulp-concat");
 
// Verifica alterações em tempo real, caso haja, executa novamente a tarefa 
var watch = require('gulp-watch');
 
// Minifica o CSS
var cssmin = require("gulp-cssmin");
 
// Remove comentários CSS
var stripCssComments = require('gulp-strip-css-comments');
 
// Processo que agrupará todos os arquivos CSS, removerá comentários CSS e minificará.
gulp.task('minify-css', function(){
    gulp.src(css)
    .pipe(concat('main-min.css'))
    .pipe(stripCssComments({all: true}))
    .pipe(cssmin())
    .pipe(gulp.dest('css'));
});
 
// Tarefa de minificação do Javascript
gulp.task('minify-js', function () {
    gulp.src(js)                        // Arquivos que serão carregados, veja variável 'js' no início
    .pipe(concat('main-min.js'))            // Arquivo único de saída
    .pipe(uglify())                     // Transforma para formato ilegível
    .pipe(gulp.dest('js'));             // pasta de destino do arquivo(s)
});
 
// Tarefa padrão quando executado o comando GULP
gulp.task('default',['minify-js','minify-css']);
 
// Tarefa de monitoração caso algum arquivo seja modificado, deve ser executado e deixado aberto, comando "gulp watch".
gulp.task('watch', function() {
    gulp.watch(js, ['minify-js']);
 gulp.watch(css, ['minify-css']);
});
