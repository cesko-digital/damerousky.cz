// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'damerousky.cz',
    siteUrl: 'https://www.damerousky.cz',
    templates: {
        Doc: [
            {
                path: (node) => {
                    let path = node.path.substring('content/pages/'.length);
                    return `/${path}`;
                }
            }
        ],
        Redirect: [
            {
                path: (node) => {
                    let path = node.path.substring('content/redirects/'.length);
                    return `/${path}`;
                }
            }
        ]
    },
    plugins: [
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'content/pages/**/*.md',
                typeName: 'Doc',
                remark: {
                    plugins: [
                        '@gridsome/remark-prismjs'
                    ]
                }
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'content/redirects/**/*.json',
                typeName: 'Redirect'
            }
        }
    ]
}
