import React from "react"

const year =new Date().getFullYear()

function Footer () {
   return(<p className ="footer">copyrightÂ©{year}</p>) 
}
export default Footer