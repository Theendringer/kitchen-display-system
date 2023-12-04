import Navbar from "./navbar"
import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
//import banner from "../imgs/KDS"




function home() {
    return (

        <>
            <Navbar />
            <div className="container">

                <h1>Bem Vindo ao KDS</h1>
                <Carousel className="my-5">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="banner01.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="kds.png"
                            alt="2 slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}


export default home;