const PersonCard = (props) =>{
    return(
        <>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hairColor}</p>
        </>
    );
}


export default PersonCard;