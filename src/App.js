import React from "react";
import "./style.css";
import Test from './Test'
import Text from './Text'
export default function App() {
  const[isloggin,setIsloggin]=React.useState(false)
  // if(!isloggin){
  //   return <Test/>
  // } else{
  //   return <Text/>
  // }
  return (
    <div>
      {!isloggin ? <Test/> : <Text/>}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
