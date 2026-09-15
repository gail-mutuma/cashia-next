import props from 'prop-types'

function Card2(props){
    return(
        <div classNAme="path">
        <div className="card">
            <div className="card-text">
                <p>{props.text}</p>
                <h1>{props.title}</h1>
                <li>{props.description}</li>
                <li>{props.point1}</li>
                <li>{props.point2}</li>
                <li>{props.point3}</li>
                <button>{props.buttonText}</button>
            </div>
            <div className="card-image">
                <img src={props.image} alt={`${props.title} illustration`} />
            </div>
        </div>
        </div>
    );
}

export default Card2;