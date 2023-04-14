import React from 'react'
import ConditionalsTernary_Logical from './ConditionalsTernary_Logical';
import ReactEvents from './ReactEvents';
import ReactProps from './ReactProps';

function ReactConditionals(props) {
    let department=["java","phyton","ReactJs"];
    // let department=[]

                             //If ELSE condition
//     if(props.isEventsOrProps){
//   return( 
//     <div>
//   <ReactEvents/>
//   <ConditionalsTernary_Logical dept={department}/>
//   </div>)
//     }
//     else{
//         return( <div><ReactProps/>
//         <ConditionalsTernary_Logical dept={department}/>
//         </div> )
//     }

                              //Ternary operator
return(
    <>
{
    props.isEventsOrProps ? 
    <div>
    <ReactEvents/>
    <ConditionalsTernary_Logical dept={department}/>
    </div> : 
    <div>
    <ReactProps/>
    <ConditionalsTernary_Logical dept={department}/>
    </div> 
}
</>
)
    
  }

export default ReactConditionals