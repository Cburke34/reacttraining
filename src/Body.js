import React from 'react'

import './Body.css'
import ImputName from './ImputName'
import ImputBio from './ImputBio'


const Body = (props) => {
    return (
      <div >
        <ImputName />
        <ImputBio />
      </div>
    );
  }


export default Body