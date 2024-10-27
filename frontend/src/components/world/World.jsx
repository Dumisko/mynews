import React from 'react'
import Worldcard from './Worldcard'

import world from "../../data/world.json"

function World() {
  return (
    <section id='world'>
      <h1> world affair section</h1>
        
        <div>
          {
            world.map((worlds, id)=>{
                return (<Worldcard key={id} worlds={worlds} />);
            })

          }
        </div>

    </section>
  )
}

export default World
