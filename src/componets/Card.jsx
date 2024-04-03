import React from 'react'
import imgsevan from '../img/imgsevan.jpg';
import imgtwo from '../img/imgtwo.jpg';
import imgthree from '../img/imgthree.jpg';
import imgfour from '../img/imgfour.jpg';

function Card() {
  return (
    <>
        <div class="order py-100">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="box">
                    <img src={imgsevan} alt="logo"/>

                        <div class="overlay">
                        </div>
                        <div class="order-text">
                            <h2>Leader</h2>
                            <h4>Original Ice Cream Class</h4>
                        </div>
                    </div>
                    <div class="box">
                    <img src={imgtwo} alt="logo"/>

                        <div class="overlay">
                        </div>
                        <div class="order-text">
                            <h2>Partner</h2>
                            <h4>Original Ice Cream Class</h4>
                        </div>
                    </div>
                    <div class="box">
                    <img src={imgthree} alt="" />

                        <div class="overlay">
                        </div>
                        <div class="order-text">
                            <h2>Product</h2>
                            <h4>Original Ice Cream Class</h4>
                        </div>
                    </div>
                    <div class="box">
                    <img src={imgfour} alt="" />
                        {/* <img src="img/img-4.jpg"alt="img-7"/> */}
                        <div class="overlay">
                        </div>
                        <div class="order-text">
                            <h2>Quality</h2>
                            <h4>Original Ice Cream Class</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export default Card;