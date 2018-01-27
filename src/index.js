import gulp from "gulp";
import zip from "gulp-zip";


export function packageBuild( { buildFolder, packageFolder, packageFile } ) {
    return gulp.src( `${buildFolder}/**/*`, { dot: true, buffer: false } )
        .pipe( zip( packageFile ) )
        .pipe( gulp.dest( packageFolder ) );
}


export function registerTask( props ) {
    gulp.task( "package", () => packageBuild( props ) );
}

export default packageBuild;
