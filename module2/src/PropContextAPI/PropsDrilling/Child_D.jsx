import React from 'react'
import {EmployeeContext,CompanyContext} from './ParentComp'

function Child_D(props) {
  return (
    <div>
      <CompanyContext.Consumer>
        {
          (cData)=>{
            return <EmployeeContext.Consumer>
              {
                (eData)=>{
                  return <div>
                    <h1>My Name is {eData}</h1>
                    <h3>Working in a {cData.cName} Company in {cData.place}</h3>
                  </div>
                }
              }
            </EmployeeContext.Consumer>
          }
        }
      </CompanyContext.Consumer>
    </div>
  )
}

export default Child_D