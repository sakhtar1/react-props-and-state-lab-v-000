import React from 'react'

class Pet extends React.Component {
  handleAdopt =() => this.props.onAdoptPet(this.props.pet.id)
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'female' ? '♀' : '♂' }
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">PET TYPE</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : 
          <button className="ui primary button" onClick={this.handleAdopt}>Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
