// Categories
import React from 'react';
import './Categories.css';

export default function Categories() {
  return (
    <section className="categories" id="categories">
      <h1 className="heading">
        products
        {' '}
        <span>categories</span>
      </h1>
      <section id="shop">
        <div class="banner-container">

          <div class="banner">
            <img src="image/vegetables.jpg" alt="" />
            <div class="content">
              <span>vegetables</span>
              <h3>upto 50% off</h3>
              <a href="/products" class="btn">shop now</a>
            </div>
          </div>

          <div class="banner">
            <img src="image/fruits.jpg" alt="" />
            <div class="content">
              <span>Fruits</span>
              <h3>upto 50% off</h3>
              <a href="/products" class="btn">shop now</a>
            </div>
          </div>

          <div class="banner">
            <img src="image/spices.jpg" alt="" />
            <div class="content">
              <span>Spices</span>
              <h3>upto 50% off</h3>
              <a href="/products" class="btn">shop now</a>
            </div>
          </div>
          <div class="banner">
            <img src="image/dairy.jpg" alt="" />
            <div class="content">
              <span>Dairy</span>
              <h3>upto 50% off</h3>
              <a href="/products" class="btn">shop now</a>
            </div>
          </div>

          <div class="banner">
            <img src="image/grains.jpg" alt="" />
            <div class="content">
              <span>Grains</span>
              <h3>upto 50% off</h3>
              <a href="/products" class="btn">shop now</a>
            </div>
          </div>

          <div class="banner">
            <img src="image/herbs.jpg" alt="" />
            <div class="content">
              <span>Herbs</span>
              <h3>upto 50% off</h3>
              <a href="/products" class="btn">shop now</a>
            </div>
          </div>
        </div>

      </section>
    </section>
  );
}
