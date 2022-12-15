const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h2>{data.place.pic}</h2>
          </main>
        </Def>
    )
}

module.exports = show
