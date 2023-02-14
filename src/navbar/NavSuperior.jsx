import React from 'react'
import './navSuperior.scss'

import { Link } from "react-router-dom";


export default function NavSuperior() {
  return (
    <div className='navSuperiorContainer'>

      <ul>
        <li>
            <Link to="http://www3.prpg.gr.unicamp.br/sites/site1/index.php/mestradodoutorado/">Mestrado na Unicamp</Link>
        </li>
        <li>
            <Link to="https://www.fcm.unicamp.br/posgraduacao/mestradodoutorado-stricto-sensu">Mestrado FCM</Link>
        </li>
        <li>
            <Link to="https://www.fcm.unicamp.br/posgraduacao/saude-coletiva">Saúde Coletiva</Link>
        </li>
      </ul>

    </div>
  )
}
