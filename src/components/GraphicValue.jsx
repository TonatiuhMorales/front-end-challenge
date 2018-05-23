import React from 'react'

export default class GraphicValue extends React.Component {

    render () {
        return (
            <div className="Select-value" title={this.props.value.name} >
                <span className="Select-value-label">
                    <img src={this.props.value.image}  alt='dd'  style={{width: '2em'}}/>
                    {this.props.children}
                </span>
            </div>
        );
    }
}