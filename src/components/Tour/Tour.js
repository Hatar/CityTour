import React, { Component } from 'react'
import './tour.scss'
class Tour extends Component{
  state ={
    show:false
  }
  toggleInfo = () =>{
    this.setState({
      show:!this.state.show
    })
  }
  render(){
    const {id,city,img,name,info} = this.props.detail
    const {removeTour} = this.props
    return (
      <section className="tour">
        <div className="img-container">
          <img src={img} alt='image Single Tour'/>
          <span className="close-btn"  onClick={() => removeTour(id)}>
            <i className="fa fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info {""}
            <span onClick={this.toggleInfo}>
              <i className="fa fa-level-down" aria-hidden="true"></i>
            </span>
          </h5>
          {this.state.show && <p>{info}</p>}
        </div>
      </section>
    )
  }
}
export default Tour
