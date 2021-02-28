import React from 'react';
import './AddedInfo.css';

const AddedInfo = (props) => {
    // console.log(props.added);
    const added = props.added;

    let annoyalSalary = 0;
    for (let i = 0; i < added.length; i++) {
        const salary = added[i];
        annoyalSalary = annoyalSalary + salary.salary * 12;
    }

    let images = '';
    for (let i = 0; i < added.length; i++) {
        const image = added[i];
        images = image.img
    }

    let names = '';
    for (let i = 0; i < added.length; i++) {
        const name = added[i];
        names = name.name;
    }
    return (
        <div>
            <div className='added-friends'>
                <img src={images} />
                <p>you and <strong>{names}</strong> is friend now..</p>
            </div>
            <h1>Annoyal Salary : {annoyalSalary}</h1>
        </div>
    );
};

export default AddedInfo;