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
    const url = "/api/pets"
    let type = this.state.filters.type
    fetch(`${url}?type=${type}`)
    .then(resp => resp.json())
    .then(allPets => this.setState({
      pets: allPets
    }))
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
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
