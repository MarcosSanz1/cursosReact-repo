import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CuotaItem extends Component {
    // Primero comprobamos que la cuota este completada, si lo esta devolvemos un estilo y si no otro
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.cuota.completed ? 'line-through' : 'none'
        }
    }
    
    // // Esta función recibe un evento que luego usamos para decir que va a hacer después de este
    // markComplete = (e) => {
    //     console.log(this.props)
    // }
    
    // Podemos crear constantes para guardar toda la cuota y llamar a los valores "{ id, titulo, etc.}"
    // El .bind sirve para "coger", dentro ponemos lo que nos queremos llevar para hacer la función
  render() {
      const { id, title } = this.props.cuota;
    return (
        <div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.markComplete.bind (this, id)}/> {' '}
                { title }
                <button onClick={this.props.delCuota.bind(this, id)} style={btnStyle}>x</button>
            </p>
        </div>
    )
  }
}

// PropTypes
CuotaItem.propTypes = {
    cuota: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delCuota: PropTypes.func.isRequired
  }

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

export default CuotaItem;