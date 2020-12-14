import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeType(event){
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick(){
    let type = this.state.filters.type
    let url = this.state.filters.type === 'all' ? "/api/pets" : `/api/pets?type=${type}`

    fetch(url)
    .then(resp => resp.json())
    .then(allPets => this.setState({
      pets: allPets
    }))
  }

  onAdoptPet = (id) => {
    const petsArray = this.state.pets.map(pet => {
      return pet.id === id ? {...pet, isAdopted: true} : pet
    })
    this.setState({
      pets: petsArray
    })
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
              changeType={(event) => this.changeType(event)}
              fetchAll={() => this.onFindPetsClick()}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
