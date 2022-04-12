import { Component } from "react";

import './card.css';

class Card extends Component {
    render() {
        const { id, name, email } = this.props.robot;
        return (
            <div className='card-container' key={id}>
                <img
                    alt={`robot ${name}`}
                    src={`https://robohash.org/${id}?set=2`}
                />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}


export default Card;