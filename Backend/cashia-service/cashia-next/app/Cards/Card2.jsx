import Image from 'next/image';
import props from 'prop-types';
import { ArrowRight } from 'lucide-react';
import { CheckCircle } from 'lucide-react';


function Card2(props){
    return(
        
        <div className="card">
            <div className="card-text">
                <p>{props.text}</p>
                <h1 style={{ fontSize: '15px', fontWeight: 'bold'}}>{props.title}</h1>
                <li>{props.description}</li>
                <li style={{ display: 'flex'}}><CheckCircle size={15}/>{props.point1}</li>
                <li style={{ display: 'flex'}}><CheckCircle size={15}/>{props.point2}</li>
                <li style={{ display: 'flex'}}><CheckCircle size={15}/>{props.point3}</li>
                <button>{props.buttonText} <ArrowRight size={13} /></button>
            </div>
            <div className="card-image">
                <Image src={props.image} alt={`${props.title} illustration`} width={320} height={260} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>
        </div>
        
    );
}



export default Card2;