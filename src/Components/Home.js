import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import i1 from '../images/p1.jpeg';
import i2 from '../images/p2.jpeg';

const Home = () => {
    return (
        <div>
            <h2>payment System</h2>
            <br />
            <br />


<div class="card-group">
  <div class="card m-4">
  <img src={i2} class="card-img-top" alt="..."/>
    <div class="card-body p-4 bg-secondary ">

      <h5 class="card-title font-weight-bold text-light ">Chicken Burgar 1:2</h5>
      <p class="card-text text-light">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <b class="bg-danger text-light">Price : 250 tk</b>
<br />
<br />

<button type="button" class="btn btn-danger">Buy Now</button>
    </div>

    
  </div>
  <div class="card m-4">
    <img src={i1} class="card-img-top" alt="..."/>
    <div class="card-body p-4 bg-secondary ">

      <h5 class="card-title font-weight-bold text-light ">Beef
       Burgar 1:1</h5>
      <p class="card-text text-light">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <b class="bg-danger text-light">Price : 180 tk</b>
<br />
<br />

<button type="button" class="btn btn-danger">Buy Now</button>
    </div>

   

  </div>

  <div class="card m-4">
  <img src={i2} class="card-img-top" alt="..."/>
  <div class="card-body p-4 bg-secondary ">

<h5 class="card-title font-weight-bold text-light ">Beef Burgar 1:2</h5>
<p class="card-text text-light">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
<b class="bg-danger text-light">Price : 420 tk</b>
<br />
<br />

<button type="button" class="btn btn-danger">Buy Now</button>
</div>

  </div>

</div>


        </div>
    );
};

export default Home;