import React from 'react';
import './Friends.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Friends = (props) => {
    // console.log(props);
    const {img, name, phone, email, gender, country, salary} = props.friend;
    const addFriend = props.addFriend;
    return (
        <div className='friends-container'>
            <div className='content'>
                <img src={img} alt="photo" />
                <h3>{name}</h3>
            </div>
            <div className='info'>
                <p> Gender :<small>{gender}</small></p>
                <p>Email : {email}</p>
                <p>Phone : {phone}</p>
                <p>Country : {country}</p><br/>
                <p>Monthly salary : {salary}</p>
                <button onClick={() => addFriend(props.friend)}> <FontAwesomeIcon icon={faUserPlus} /> add friend</button>
            </div>
        </div>
    );
};

export default Friends;