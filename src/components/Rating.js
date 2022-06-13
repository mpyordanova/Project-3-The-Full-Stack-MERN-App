import React, {useState} from 'react';

const Rating = ()=> {
    const [rating, setRating]= useState(0);
 
    return ( 
    <div className='star-rating'>
       <p>Rate my website</p>
       {[...Array(5)].map((star, index)=>{
        index +=1;
        return(
            <button type="star-button"
            key={index}
            className={index<=rating ? 'on': 'off'}
            onClick ={()=>setRating(index)}
            onDoubleClick={() => {
                setRating(0);
                }}
            >
            <span className='star'>&#9733;</span>
            </button>
        );
       })}
    </div>
    );
};



export default Rating;