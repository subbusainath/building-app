import React, { Component } from 'react';
import './Builder.css';

class Field extends Component {





    render() {
        return (
            //draggable
            <div draggable="true" className="field fieldToDrag" data-type-field={this.props['data-field']['typeInput']}>
                <span>
                    {this.props['data-field']['classIcon']?(<i className={'fas '+this.props['data-field']['classIcon']}></i>):("")}
                    {this.props['data-field']['label']}</span>
            </div>
    );
    }
}

export default Field;
