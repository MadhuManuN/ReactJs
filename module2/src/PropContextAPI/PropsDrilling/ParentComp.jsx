import { createContext } from 'react'
import Child_A from './Child_A'

let EmployeeContext=createContext()
let CompanyContext=createContext();

function ParentComp() {
  return (
    <div>
        <CompanyContext.Provider value={{cName:"ZKTECO",place:"Bengaluru"}}>
          <EmployeeContext.Provider value="Madhu">
            <Child_A/>
          </EmployeeContext.Provider>
        </CompanyContext.Provider>
    </div>
  )
}

export default ParentComp
export {EmployeeContext,CompanyContext}