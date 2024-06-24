import backgroundImage from '../images/b3.jpg'
import Header from './Header';
function IntroSame(props){
    return(
        
    <div className="about-page w-100 vh-100" style={{backgroundImage:`url(${props.backgroundImage})`}}>
        <div>
                <Header/>
        </div>
            <div className='h-75 d-flex justify-content-center align-items-center '>
            
                <div className="col-lg-6 col-md-5 col-7 d-flex justify-content-center align-items-center" >
                    <div className="text-center">
                        <p className=" display-lg-4 display-md-5 display-6   bold">{props.title}</p>
                        <p className=" fs-lg-3 fs-md-3 fs-sm-2" style={{color:"black"}}>{props.description}
                        </p>
                    </div>
                </div>
            </div>
            </div> 
            
           


    
    );
}
export default IntroSame;