import props from 'prop-types'

function Card3(props){
    return(
        <div classNAme="trust">
            <div className="card">
                <p>{props.title}</p>
                <li>{props.description}</li>
            </div>
        </div>
    );
}

export default Card3