import React, { Component } from 'react'
import Tour from '../Tour/Tour'
import './tourlist.scss'
import {tourData} from '../../tourData'
class TourList extends Component {

  state ={
    tours : tourData,
    visiblity:false
  }

  removeTour = (id) =>{
    let tourFilter =this.state.tours.filter(tour => tour.id !== id)
    this.setState({
      tours:tourFilter
    })
  }
  render() {
    const {tours} = this.state
    const toursLenght = tours.length
    return (
      <section className="tourlist">
        {
          toursLenght !==0 ? (
            tours.map(tour =>(
              <Tour key={tour.id} detail={tour} removeTour={this.removeTour} />
            ))
           ) : (<p className="voidData">Nothing Data,Please Refresh Page !!!</p>)
        }
      </section>
    )
  }
}
export default TourList
