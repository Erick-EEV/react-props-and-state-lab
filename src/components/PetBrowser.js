import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {


  // generatePet = () => {
  //   let petsArray = this.props.pets
  //   return petsArray.map(pet => console.log(pet))
  // }


  render() {
    let petsArray = this.props.pets
    petsArray.map(pet => console.log(pet.name))
    // console.log(this.props.pets.pet);
    

    return (
    <div className="ui cards"> <Pet pet={petsArray}/></div>)
  }
}

export default PetBrowser
