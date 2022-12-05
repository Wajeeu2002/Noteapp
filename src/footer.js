import React from "react"

const year =new Date().getFullYear()

function Footer () {
   return(<p className ="footer">copyright©{year}</p>) 
}
export default Footer