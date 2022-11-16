import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'



const ProductList = () => {

    const backgroundImg = ['produce.png', 'tools.png']

    return (
        <div>
            
            <div className='adCarousel'>
                <img src={require('./img/site_ads/' + backgroundImg[Math.floor(Math.random() * backgroundImg.length)]) }/>

                {/* <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src={require('./img/site_ads/produce.png')} class="d-block w-100" alt='produce'/>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={require('./img/site_ads/tools.png')} class="d-block w-100" alt='tools'/>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={require('./img/site_ads/raw/squares/pexels-photo-868096.jpeg')} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> */}



            </div>
            <div className='categoryContainer'>
                <div className='mainCategory'>
                    <h3>chairs n things</h3>
                    <img src={require('./img/site_ads/raw/squares/patio.jpeg')} width="160px"/>
                </div>
                <div className='mainCategory'>
                    <h3>chairs n things</h3>
                    <img src={require('./img/site_ads/raw/squares/patio.jpeg')} width="160px"/>
                </div>
                <div className='mainCategory'>
                    <h3>chairs n things</h3>
                    <img src={require('./img/site_ads/raw/squares/patio.jpeg')} width="160px"/>
                </div>
                <div className='mainCategory'>
                    <h3>chairs n things</h3>
                    <img src={require('./img/site_ads/raw/squares/patio.jpeg')} width="160px"/>
                </div>
            </div>
            
        </div>
    )
}

export default ProductList