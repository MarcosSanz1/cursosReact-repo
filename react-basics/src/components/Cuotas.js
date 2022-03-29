import React, {Component} from 'react';
import CuotaItem from './CuotaItem';
import PropTypes from 'prop-types';

// Tengo que decir cual es la clave única 
class Cuotas extends Component {

  constructor(){
    console.log("Esto home");
  }

  // markComplete = () => {
  //    console.log('Hello')
  //   }

  render() {
    console.log(this.props.cuotas);
    console.log("Esto es home")
    return this.props.cuotas.map((cuota) => (
      <CuotaItem key={cuota.id} cuota={cuota} 
      markComplete={this.props.markComplete}
      delCuota={this.props.delCuota}/>
    ));
  }
}

// PropTypes
Cuotas.propTypes = {
  cuotas: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delCuota: PropTypes.func.isRequired
}

export default Cuotas;