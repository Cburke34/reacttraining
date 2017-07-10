import React from 'react'

import './Body.css'
import ImputName from './ImputName'
import ImputBio from './ImputBio'


class Body extends React.Component {
render() {
    return (
      <div >
        <ImputName />
        <ImputBio />
      </div>
    );
  }
}


export default Body