import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'

function getHtml(appHtml) {
    return `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                hello world
            </body>
        </html>
    `
}

function renderInital(req,res) {
    res.send(getHtml())
}

export default function(router) {
    router.get('/', renderInital)
}

