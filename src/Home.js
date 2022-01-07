
import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
            
        <div className="home" >
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            ></img>
            <div className="home__row">
            <Product
                id="1231414123"
                title="book"
                price={100}
                rating={5}
                image="https://m.media-amazon.com/images/P/1585424331.01._SCLZZZZZZZ_SX500_.jpg"
            />
             <Product
                id="1231414124"
                title="chocolates khaane h khaa lo..bhut tasty h...kisi ko gift bhi kr skte h aap..theek h naa..samajh gye naa"
                price={110}
                rating={3}
                image="https://www.bigbasket.com/media/uploads/p/l/40157246_2-cadbury-dairy-milk-silk-hazelnut-chocolate-bar.jpg"
            />
            
            </div>
            <div className="home__row">
            <Product
                id="1231414123"
                title="frock"
                price={1100}
                rating={5}
                image="https://m.media-amazon.com/images/I/61jCFUG3O4L._UX466_.jpg"
            />
             <Product
                id="1231414123"
                title="Apple i phone"
                price={85000}
                rating={5}
                image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-product-red-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629907845000"
            />
             <Product
                id="1231414123"
                title="Kinnaur apples"
                price={60 }
                rating={4}
                image="https://www.bigbasket.com/media/uploads/p/l/40020962_10-fresho-apple-kinnaur.jpg"
            />
            </div>
            <div className="home__row">
            <Product
                id="1231414123"
                title="One plus TV"
                price={30000}
                rating={5}
                image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1633329813/Croma%20Assets/Entertainment/Television/Images/244468_k5ukel.png/mxw_2048,f_auto"
            />
            </div>
        </div>
    )
}

export default Home
