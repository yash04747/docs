const path = require('path')
const container = require('markdown-it-container')

module.exports = ctx => ({
    // dest: '',
    // base: '',

    locales: {
        '/': {
            lang: 'en-US',
            title: 'Redux',
            description: 'The WordPress Interface Framework',

        },
    },
    head: [
        ['link', {rel: 'icon', href: `/logo.png`}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#3ea5ce'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png`}],
        ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3ea5ce'}],
        ['meta', {name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
    ],
    // theme: '@vuepress/vue',
    themeConfig: {
        repo: 'reduxframework/docs',
        editLinks: true,
        docsDir: 'docs',
        // #697 Provided by the official algolia team.
        algolia: ctx.isProd ? ({
            apiKey: '',
            indexName: 'reduxframework'
        }) : null,
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: require('./nav/en'),
                sidebar: {
                    '/guides/': getSidebar('Guides', '/guides/'),
                    '/configuration/': getSidebar('Configuration', '/configuration/'),
                    '/core-fields/': getSidebar('Fields', '/core-fields/'),
                    '/premium/': getSidebar('Premium / Pro', '/premium/'),
                    '/faq/': getSidebar('FAQ', '/faq/'),
                    '/core-extensions/': getSidebar('Core Extensions', '/core-extensions/')
                },
            },
        }
    },
    plugins: [
        // ['@vuepress/plugin-i18n-ui', !ctx.isProd],
        ['@vuepress/back-to-top', true],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: false
        }],

        ['vuepress-plugin-zooming', {
            // selector for images that you want to be zoomable
            // default: '.content img'
            selector: '.my-wrapper .my-img',

            // make imgaes zoomable with delay after entering a page
            // default: 500
            delay: 1000,

            // options of zooming
            // default: {}
            options: {
                bgColor: 'black',
                zIndex: 10000,
            },
        }],

        // ['@vuepress/plugin-notification', true],
        ['@vuepress/google-analytics', {
            ga: 'UA-45553284-5'
        }],
        ['copyright', {
            // noCopy: true,   // the selected text will be uncopiable
            minLength: 100, // if its length is greater than 100
        }],
        // ['clean-urls', {
        //     normalSuffix: '',
        //     indexSuffix: '',
        // }],

        ['git-log', {
            additionalArgs: '--no-merge',
            onlyFirstAndLastCommit: true,
        }],
        ['@dovyp/vuepress-plugin-clipboard-copy', true],
        ['reading-progress', true],

    ],
    // clientRootMixin: path.resolve( __dirname, 'mixin.js' ),
    extendMarkdown(md) {
        md.use(container, 'upgrade', {
            render: (tokens, idx) => tokens[idx].nesting === 1
                ? `<UpgradePath title="${tokens[idx].info.trim().slice('upgrade'.length).trim()}">`
                : '</UpgradePath>'
        })
    },
})


const fs = require('fs');

// Return a list of files of the specified fileTypes in the provided dir,
// with the file path relative to the given dir
// dir: path of the directory you want to search the files for
// fileTypes: array of file types you are search files, ex: ['.txt', '.jpg']
function getFilesFromDir(dir, fileTypes, subdir) {
    var filesToReturn = [];
    var nested = {};

    function walkDir(currentPath) {
        var files = fs.readdirSync(currentPath);

        dirname = currentPath.split(subdir)[1];
        // if (dirname === "img") {
        //     return;
        // }

        var dirname = currentPath.split(subdir)[1];
        // currentPath.split(subdir)[1]

        for (var i in files) {
            var curFile = path.join(currentPath, files[i]);
            if (fs.statSync(curFile).isFile() && fileTypes.indexOf(path.extname(curFile)) != -1) {
                // console.log('--'+dirname+'--')
                if (dirname == null || dirname.length === 0) {
                    filesToReturn.push(curFile.replace(dir, ''));
                } else {
                    if (!(dirname in nested)) {
                        nested[dirname] = [];
                    }
                    nested[dirname].push(curFile.replace(dir, ''));
                }
            } else if (fs.statSync(curFile).isDirectory()) {
                walkDir(curFile);
            }
        }
    };
    walkDir(dir);
    // console.log(filesToReturn);
    return [filesToReturn, nested];
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function getSidebar( title, path, collapsable = false, depth = 0 ) {
    var the_path = __filename.split( '/.vuepress' )[0]
    // This needs to work for both windows AND unix
    if ( the_path.includes( '\.vuepress' ) ) {
        the_path = __filename.split( '\.vuepress' )[0]
    }

    var file_types = getFilesFromDir(the_path + path, [".md"], path);
    var the_files = file_types[0];
    var nested = file_types[1];
    var to_return = []

    // if (introduction !== '') {
    // 	to_return.push(['', introduction])
    // }
    var top = ""
    the_files.forEach( file => {
        if ( file.substring( file.length - 3, file.length ) == ".md" ) {
            file = file.substring( 0, file.length - 3 )
            // to_return.push( file )
            if ( file.toLowerCase() != "index" && file.toLowerCase() != "readme" ) {
                to_return.push( file )
            } else {
                top = file
                // to_return.push( file )
            }
        }
    } );

    var the_return = [];
    if (to_return.length > 0) {
        the_return.push({
            title: title,
            collapsable: collapsable,
            sidebarDepth: depth,
            children: to_return
        });
    }

    if ( nested ) {
        Object.keys(nested).forEach(keyname => {
            var new_to_return = [];
            nested[keyname].sort();
            // console.log(nested[keyname]);
            nested[keyname].forEach(file => {
                if (file.substring(file.length - 3, file.length) == ".md") {
                    file = file.substring(0, file.length - 3)
                    // to_return.push( file )
                    if (file.toLowerCase() != "index" && file.toLowerCase() != "readme") {
                        new_to_return.push(file)
                    } else {
                        top = file
                        // to_return.push( file )
                    }
                }
            });

            if ( new_to_return ) {
                the_return.push({
                    title: toTitleCase(keyname),
                    collapsable: false,
                    sidebarDepth: depth,
                    children: new_to_return
                })
            }
        });
    }

    return the_return;
}

function getSidebar2(title, path, collapsable = false, depth = 0) {
    var the_path = __filename.split('/.vuepress')[0];
    // This needs to work for both windows AND unix
    if (the_path.includes('\.vuepress')) {
        the_path = __filename.split('\.vuepress')[0];
    }

    var file_types = getFilesFromDir(the_path + path, [".md"], path);
    var the_files = file_types[0];
    var nested = file_types[1];

    var to_return = [];

    var top = "";
    the_files.forEach(file => {
        if (file.substring(file.length - 3, file.length) == ".md") {
            file = file.substring(0, file.length - 3)
            // to_return.push( file )
            if (file.toLowerCase() != "index" && file.toLowerCase() != "readme") {
                to_return.push(file)
            } else {
                top = file;
                to_return.push(file)// to_return.push( file )
            }
        }
    });

    // console.log(the_files);

    var the_return = [
        {
            title: title,
            collapsable: collapsable,
            sidebarDepth: depth,
            children: to_return
        },
    ];

    // hold = []

    // if ( nested ) {
    //     Object.keys(nested).forEach(keyname => {
    //         var new_to_return = [];
    //         nested[keyname].sort();
    //         // console.log(nested[keyname]);
    //         nested[keyname].forEach(file => {
    //             if (file.substring(file.length - 3, file.length) == ".md") {
    //                 file = file.substring(0, file.length - 3)
    //                 // to_return.push( file )
    //                 if (file.toLowerCase() != "index" && file.toLowerCase() != "readme") {
    //                     new_to_return.push(file)
    //                 } else {
    //                     top = file
    //                     // to_return.push( file )
    //                 }
    //             }
    //         });
    //
    //         if ( new_to_return ) {
    //             the_return.push({
    //                 title: toTitleCase(keyname),
    //                 collapsable: false,
    //                 sidebarDepth: depth,
    //                 children: new_to_return
    //             })
    //         }
    //     });
    // }



    return the_return;
}

