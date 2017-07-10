import React from 'react';

import './ImputBio.css'


class ImputBio extends React.Component {
constructor() {
  super()
  this.state = {
  bio: [],
  }
}

handleSubmitBio(ev) {
        ev.preventDefault()
        const bio = [...this.state.bio]
        bio.push(this.personBioImput.value)
        this.setState({ bio })
        ev.currentTarget.reset()
    }

    renderBio(info, i) {
        return <li key={i}>{info}</li>
    }
    render() {
        return (
<div>
    <div className="row">
          <div className="medium-offset-2 medium-8 column">  
        <form onSubmit={this.handleSubmitBio.bind(this)}>
            <input
              type="text"
              ref={imput => this.personBioImput = imput}
              className="input-group-field"
              name="list2"
              placeholder="Tell us about YOU"
              required
            />
              <button className= "expanded success button" type="submit">
                Submit
              </button>
        </form>
        </div>
    </div>

        <ul>
            {this.state.bio.map(this.renderBio)}
        </ul>
</div>
        )
    }
}


export default ImputBio