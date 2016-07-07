var gulp        =   require( 'gulp' ),
    sass        =   require( 'gulp-sass' ),
    autoprefixer=   require( 'gulp-autoprefixer' ),
    sourcemaps  =   require( 'gulp-sourcemaps'),
    browserSync =   require( 'browser-sync'),
    reload      =   browserSync.reload;

var config = {
    sassPath:           './sass',
    bowerDir:           './bower_components',
    bootstrapDir:       '/bootstrap-sass-official/assets/stylesheets',
    fontawesomedir:     '/fontawesome/scss'
}

gulp.task( 'bower', function() {
    return bower()
        .pipe( gulp.dest( config.bowerDir ) )
});

gulp.task( 'icons', function() {
    return gulp.src( config.bowerDir + '/fontawesome/fonts/**.*' )
        .pipe( gulp.dest( './fonts' ) )
});

gulp.task( 'css', function() {
    return gulp.src( config.sassPath + '/style.css' )
        .pipe()
});

gulp.task( 'sass', function() {
   return gulp.src( 'sass/**/*.scss' )
        .pipe( sourcemaps.init()  )
        .pipe( sass({
                outputStyle: 'expanded',
                loadPath: [ config.bowerDir + config.bootstrapDir,
                            config.bowerDir +
                        ]
            }).on( 'error', sass.logError ) )
        .pipe( autoprefixer() )
        .pipe( sourcemaps.write('./maps') )
        .pipe( gulp.dest( './') )
        .pipe( reload( { stream:true } ) );
});

gulp.task( 'browser-sync', function() {
    var files = [
            '**/*.css',
            '**/*.php',
            '**/*.{ jpg, png, gif }'
        ];

    browserSync.init( files, {
       proxy: 'frontporch.dev'
    });
});

gulp.task( 'default', [ 'sass', 'browser-sync' ], function() {
   gulp.watch( 'sass/**/*.scss', [ 'sass' ] )
});
