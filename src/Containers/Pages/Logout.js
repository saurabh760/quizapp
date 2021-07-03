import React from 'react'

/**
* @author
* @function Logout
**/

const Logout = (props) => {
  props.history.push('/login');
  return(
    <div>Logout</div>
   )

 }

export default Logout