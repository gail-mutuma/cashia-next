import props from 'prop-types'

function Card3(props){
    return(
        <div className="trust">
            <div className="card">
                <p>{props.title}</p>
                <ul>
                <li>{props.description}</li>
                </ul>
            </div>
        </div>
    );
}

export default Card3