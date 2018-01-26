import gulp from "gulp";
import zip from "gulp-zip";


export function packageBuild( { buildFolder, packageFolder, packageFile } ) {
    // see https://github.com/klaascuvelier/gulp-copy/issues/5
    const everything = [ "**/*", "**/.*", ".**/*", ".**/.*" ].map( pattern => `${buildFolder}/${pattern}` );
    return gulp.src( everything, { buffer: false } )
        .pipe( zip( packageFile ) )
        .pipe( gulp.dest( packageFolder ) );
}


export function registerTask( props ) {
    gulp.task( "package", () => packageBuild( props ) );
}

export default packageBuild;
