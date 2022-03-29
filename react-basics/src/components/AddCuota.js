import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Tengo que decir cual es la clave única 
class AddCuota extends Component {
    state = {
        title: ''
    }

    // Método que recoge el contenido del input de tipo texto en "value" del input y guarda este en "name"
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    // Intentará enviarlo al archivo real y para evitar eso usamos la función preventDefault
    // Guardamos el título de la cuota
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addCuota(this.state.title);
        this.setState({ title: '' });
    }

  render() {
    return (
        <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
            <input 
                type="text" 
                name='title'
                style={{ flex: '10', padding: '5px' }}
                placeholder='Add Cuota ...'
                //value={this.state.title}

                onChange={(e) => this.setState({title: e.target.value})}
            />
            <input
                type="submit"
                value="Submit"
                className='btn'
                style={{flex: '1'}}
            />
        </form>
    )
  }
}

AddCuota.propTypes = {
    addCuota: PropTypes.func.isRequired,
  }

export default AddCuota;