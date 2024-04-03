import React from 'react'
import productone from '../img/Productsone.jpg'
import producttwo from '../img/Productstwo.jpg'
import producthree from '../img/Productsthree.jpg'
import productfour from '../img/Productsfoure.jpg'

 function Discover() {
  return (
    <>
         <div class=" full-service py-100">
            <div class="fulltext">
                <span>Seafood</span>
                <h2>Discover our products</h2>
            </div>
            <div class="container">
                <div class="row">
                </div>
                <div class="row">
                    <div class="fullbox">
                    <img src={productone} alt="" />
                        <div class="overlay2">
                        </div>
                        <div class="full-text">
                            <h2>Mussels</h2>
                        </div>
                    </div>
                    <div class="fullbox">
                    <img src={producttwo} alt="" srcset="" />
                        <div class="overlay2">
                        </div>
                        <div class="full-text">
                            <h2>Masago</h2>
                        </div>
                    </div>
                    <div class="fullbox">
                    <img src={producthree} alt="" />
                        <div class="overlay2">
                        </div>
                        <div class="full-text">
                            <h2>Tuna</h2>
                        </div>
                    </div>
                    <div class="fullbox">
                    <img src={productfour} alt="" srcset="" />
                        <div class="overlay2">
                        </div>
                        <div class="full-text">
                            <h2>Clams</h2>
                        </div>
                    </div>
                    <div class="fullbox">
                    <img src={productfour} alt="" srcset="" />
                        <div class="overlay2">
                        </div>
                        <div class="full-text">
                            <h2>Lobster</h2>
                        </div>
                    </div>
                    <div class="fullbox">
                    <img src={producthree} alt="" />
                        <div class="overlay2">
                        </div>
                        <div class="full-text">
                            <h2>Tuna</h2>
                        </div>
                    </div>
                    <div class="fullbox">
                    <img src={producttwo} alt="" srcset="" />
                        <div class="overlay2">
                        </div>
                        <div class="full-text">
                            <h2>Masago</h2>
                        </div>
                    </div>
                    <div class="fullbox">
                    <img src={productone} alt="" />
                        <div class="overlay2">
                        </div>
                        <div class="full-text">
                            <h2>Mussels</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export default Discover
