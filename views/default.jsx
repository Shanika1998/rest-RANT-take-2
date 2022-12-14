const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="style.css"/>
            </head>
            <body>
                <nav>
                    <ul></ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/places'>Places</a>
                        </li>
                        <li>
                            <a href='/places/new'>Add Places</a>
                        </li>
                </nav>
                {html.children}
            </body>
        </html>
    )
  }
  

module.exports = Def
