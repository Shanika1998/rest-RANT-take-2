const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/images/sad-cat.jpg" alt = "Sad Cat" width="400" height="400"/>
              </div>
              <div>
              Photo by <a href="https://unsplash.com/@hhh13?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">傅甬 华</a> on <a href="https://unsplash.com/s/photos/sad-cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
