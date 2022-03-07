import React from "react";
import Tab from "./singletab";
//destruturing  {tabnames} = props
function Tabs({ tabNames }) {
  console.log(tabNames)
  return (
    <div className="tabs">
        {
        tabNames.map((tabName, index) => {
          
          return <Tab key={ index } tabName={ tabName } />
        })
        }
     </div>
  )
    
   
  
}

export default Tabs;