const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    let projectName = 'btcElement';

    const files = [
        './dist/'+ projectName +'/runtime.js',
        './dist/'+ projectName +'/polyfills.js',
        './dist/'+ projectName + '/scripts.js',
        './dist/'+ projectName +'/main.js'
    ];

    await fs.ensureDir('elements');
    await concat(files, 'elements/'+ projectName +'.js');
    await fs.copyFile(
        './dist/'+ projectName +'/styles.css',
        'elements/styles.css'
    );
})();