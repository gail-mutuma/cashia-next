import props from 'prop-types'

function Card1(props){
    return(
        <div className="card">
            <h1>{props.title}</h1>
            <li>{props.description}</li>
            <button>{props.buttonText}</button>
        </div>
    );
}

export default Card1;

