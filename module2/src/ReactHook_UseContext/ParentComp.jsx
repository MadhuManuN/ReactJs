import { createContext } from 'react'
import Child_A from './Child_A'

let EmployeeContext=createContext("No Data")
let CompanyContext=createContext("No Data");
let{Consumer:EConsumer,Provider:EProvider}=EmployeeContext;
let{Consumer:CConsumer,Provider:CProvider}=CompanyContext;

function ParentComp() {
  return (
    <div>
        <CProvider value={{cName:"ZKTECO",place:"Delhi"}}>
          <EProvider value="Madhu Manu">
            <Child_A/>
          </EProvider>
        </CProvider>
    </div>
  )
}

export default ParentComp
export {EmployeeContext,CompanyContext,EConsumer,CConsumer,EProvider,CProvider}