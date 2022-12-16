const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
          
            <h1>{ data.place.name }</h1>
            <img src={ data.place.pic } alt={data.place.name}/>
            <h2>{ data.place.city }, {data.place.state}</h2>
            <h3>Cuisines: {data.place.cuisines}</h3>
            <a href="" className="btn btn-warning"> 
               Edit
            </a>  
            <form method="POST" action=""> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>     


            ,<div>
              <h2>Ratings</h2>
              <h2>Comments</h2>

            </div>
          </main>
        </Def>
    )
}

module.exports = show
