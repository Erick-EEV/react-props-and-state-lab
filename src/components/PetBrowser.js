import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    let petsArray = this.props.pets
    

    return (
    <div className="ui cards"> {petsArray.map(pet => <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>)} </div>)
  }
}

export default PetBrowser
