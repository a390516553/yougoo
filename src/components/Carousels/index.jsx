import youtube from '@images/youtube.jpeg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as Spinner } from 'react-responsive-carousel';

function Binner() {
    return (
        <Spinner showThumbs={false} infiniteLoop={true} autoPlay>
            <div>
                <img src={youtube} alt="" />
            </div>
            <div>
                <img src={youtube} alt="" />
            </div>
            <div>
                <img src={youtube} alt="" />
            </div>
            <div>
                <img src={youtube} alt="" />
            </div>
        </Spinner>
    )
}

export default Binner
