import { useState } from "react";

function Card({id, name,image,info,price,btnHandler}){
    const[showMore,setShowMore]=useState(false);
    const data=`${info.substring(0,200)}...`
    const[description,setDescription]=useState(data);
    function readMoreHandler(){
        if(showMore){
            setDescription(data)
        }
        else{
            setDescription(info)
        }
        setShowMore(!showMore);
    }
    return(
        <div className="Card">
            <div className="image">
                <img src={image} alt="tourImage"></img>
            </div>
            <div>
                <h2>{price}</h2>
                <h2>{name}</h2>
                <p>{description}
                    <span className="showMore" onClick={readMoreHandler}>
                        {showMore?"show less":"show more"}
                    </span>
                </p>
                
            </div>
            <button className="btn-remove" onClick={()=>btnHandler(id)}>Not Interested</button>
        </div> 
    )
}
export default Card;