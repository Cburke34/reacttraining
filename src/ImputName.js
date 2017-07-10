import React from 'react';

import './ImputName.css'

class ImputName extends React.Component {
constructor() {
  super()
  this.state = {
  people: [],
  }
}

 handleSubmitName(ev) {
        ev.preventDefault()
        const people = [...this.state.people]
        people.push(this.personNameImput.value)
        this.setState({ people })
        ev.currentTarget.reset()
    }

    renderName(name, i) {
        return <li key={i}>{name}</li>
    }

    render() {
        return (
        <div className="row">
          <div className=" medium-8 column">  
        <form id= "form1" onSubmit={this.handleSubmitName.bind(this)}>
            <input
              type="text"
              ref={imput => this.personNameImput = imput}
              className="input-group-field"
              name="list1"
              placeholder="Insert Name"
              autoFocus
              required
            />
        </form>

        <ul>
            {this.state.people.map(this.renderName)}
        </ul>
     </div>
    </div>
        )
    }
}


export default ImputName