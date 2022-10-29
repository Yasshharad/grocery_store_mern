import React from "react";

function ProductsPage() {
    let preveiwContainer = document.querySelector('.products-preview');
    let previewBox = preveiwContainer.querySelectorAll('.preview');

    document.querySelectorAll('.products-container .product').forEach(product => {
        product.onclick = () => {
            preveiwContainer.style.display = 'flex';
            let name = product.getAttribute('data-name');
            previewBox.forEach(preview => {
                let target = preview.getAttribute('data-target');
                if (name == target) {
                    preview.classList.add('active');
                }
            });
        };
    });

    previewBox.forEach(close => {
        close.querySelector('.fa-times').onclick = () => {
            close.classList.remove('active');
            preveiwContainer.style.display = 'none';
        };
    });
    return (
        <div>
            <div class="container">

                <h3 class="title"> Products </h3>

                <div class="products-container">

                    <div class="product" data-name="p-1">
                        <img src="image/1.png" alt="" />
                        <h3>strawberries</h3>
                        <div class="price">Rs. __</div>
                    </div>

                    <div class="product" data-name="p-2">
                        <img src="image/2.png" alt="" />
                        <h3>onions</h3>
                        <div class="price">Rs. __</div>
                    </div>

                    <div class="product" data-name="p-3">
                        <img src="image/3.png" alt="" />
                        <h3>tomatoes</h3>
                        <div class="price">Rs. __</div>
                    </div>

                    <div class="product" data-name="p-4">
                        <img src="image/4.png" alt="" />
                        <h3>brinjal</h3>
                        <div class="price">Rs. __</div>
                    </div>

                    <div class="product" data-name="p-5">
                        <img src="image/5.png" alt="" />
                        <h3>broccoli</h3>
                        <div class="price">Rs. __</div>
                    </div>

                    <div class="product" data-name="p-6">
                        <img src="image/6.png" alt="" />
                        <h3>potato</h3>
                        <div class="price">Rs. __</div>
                    </div>

                    <div class="product" data-name="p-7">
                        <img src="image/7.png" alt="" />
                        <h3>lemon</h3>
                        <div class="price">Rs. __</div>
                    </div>

                    <div class="product" data-name="p-8">
                        <img src="image/8.png" alt="" />
                        <h3>cauliflower</h3>
                        <div class="price">Rs. __</div>
                    </div>

                    <div class="product" data-name="p-9">
                        <img src="image/9.png" alt="" />
                        <h3>Banana</h3>
                        <div class="price">Rs. __</div>
                    </div>

                    <div class="product" data-name="p-10">
                        <img src="image/10.png" alt="" />
                        <h3>spinach</h3>
                        <div class="price">Rs. __</div>
                    </div>

                    <div class="product" data-name="p-11">
                        <img src="image/11.png" alt="" />
                        <h3>Lady Finger</h3>
                        <div class="price">Rs. __</div>
                    </div>

                    <div class="product" data-name="p-12">
                        <img src="image/12.png" alt="" />
                        <h3>Green Peas</h3>
                        <div class="price">Rs. __</div>
                    </div>

                    <div class="product" data-name="p-13">
                        <img src="image/13.png" alt="" />
                        <h3>Ginger</h3>
                        <div class="price">Rs. __</div>
                    </div>

                    <div class="product" data-name="p-14">
                        <img src="image/14.png" alt="" />
                        <h3>Carrots</h3>
                        <div class="price">Rs. __</div>
                    </div>

                    <div class="product" data-name="p-15">
                        <img src="image/15.png" alt="" />
                        <h3>Garlic</h3>
                        <div class="price">Rs. __</div>
                    </div>

                    <div class="product" data-name="p-15">
                        <img src="image/16.png" alt="" />
                        <h3>Garlic</h3>
                        <div class="price">Rs. __</div>
                    </div>




                </div>

            </div>

            <div class="products-preview">

                <div class="preview" data-target="p-1">
                    <i class="fas fa-times"></i>
                    <img src="image/1.png" alt="" />
                    <h3>organic strawberries</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>( 250 )</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                    <div class="price">Rs. __</div>
                    <div class="buttons">
                        <a href="#" class="buy">buy now</a>
                        <a href="#" class="cart">add to cart</a>
                    </div>
                </div>

                <div class="preview" data-target="p-2">
                    <i class="fas fa-times"></i>
                    <img src="image/2.png" alt="" />
                    <h3>organic onions</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>( 250 )</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                    <div class="price">Rs. __</div>
                    <div class="buttons">
                        <a href="#" class="buy">buy now</a>
                        <a href="#" class="cart">add to cart</a>
                    </div>
                </div>

                <div class="preview" data-target="p-3">
                    <i class="fas fa-times"></i>
                    <img src="image/3.png" alt="" />
                    <h3>organic tomatoes</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>( 250 )</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                    <div class="price">Rs. __</div>
                    <div class="buttons">
                        <a href="#" class="buy">buy now</a>
                        <a href="#" class="cart">add to cart</a>
                    </div>
                </div>

                <div class="preview" data-target="p-4">
                    <i class="fas fa-times"></i>
                    <img src="image/4.png" alt="" />
                    <h3>organic brinjal</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>( 250 )</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                    <div class="price">Rs. __</div>
                    <div class="buttons">
                        <a href="#" class="buy">buy now</a>
                        <a href="#" class="cart">add to cart</a>
                    </div>
                </div>

                <div class="preview" data-target="p-5">
                    <i class="fas fa-times"></i>
                    <img src="image/5.png" alt="" />
                    <h3>organic broccoli</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>( 250 )</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                    <div class="price">Rs. __</div>
                    <div class="buttons">
                        <a href="#" class="buy">buy now</a>
                        <a href="#" class="cart">add to cart</a>
                    </div>
                </div>

                <div class="preview" data-target="p-6">
                    <i class="fas fa-times"></i>
                    <img src="image/6.png" alt="" />
                    <h3>organic potatoes</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>( 250 )</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                    <div class="price">Rs. __</div>
                    <div class="buttons">
                        <a href="#" class="buy">buy now</a>
                        <a href="#" class="cart">add to cart</a>
                    </div>
                </div>

                <div class="preview" data-target="p-7">
                    <i class="fas fa-times"></i>
                    <img src="image/7.png" alt="" />
                    <h3>organic potatoes</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>( 250 )</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                    <div class="price">Rs. __</div>
                    <div class="buttons">
                        <a href="#" class="buy">buy now</a>
                        <a href="#" class="cart">add to cart</a>
                    </div>
                </div>
                <div class="preview" data-target="p-8">
                    <i class="fas fa-times"></i>
                    <img src="image/8.png" alt="" />
                    <h3>organic potatoes</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>( 250 )</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                    <div class="price">Rs. __</div>
                    <div class="buttons">
                        <a href="#" class="buy">buy now</a>
                        <a href="#" class="cart">add to cart</a>
                    </div>
                </div>
                <div class="preview" data-target="p-9">
                    <i class="fas fa-times"></i>
                    <img src="image/9.png" alt="" />
                    <h3>organic potatoes</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>( 250 )</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                    <div class="price">Rs. __</div>
                    <div class="buttons">
                        <a href="#" class="buy">buy now</a>
                        <a href="#" class="cart">add to cart</a>
                    </div>
                </div>

                <div class="preview" data-target="p-10">
                    <i class="fas fa-times"></i>
                    <img src="image/10.png" alt="" />
                    <h3>organic potatoes</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>( 250 )</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                    <div class="price">Rs. __</div>
                    <div class="buttons">
                        <a href="#" class="buy">buy now</a>
                        <a href="#" class="cart">add to cart</a>
                    </div>
                </div>
                <div class="preview" data-target="p-11">
                    <i class="fas fa-times"></i>
                    <img src="image/11.png" alt="" />
                    <h3>organic potatoes</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>( 250 )</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                    <div class="price">Rs. __</div>
                    <div class="buttons">
                        <a href="#" class="buy">buy now</a>
                        <a href="#" class="cart">add to cart</a>
                    </div>
                </div>
                <div class="preview" data-target="p-12">
                    <i class="fas fa-times"></i>
                    <img src="image/12.png" alt="" />
                    <h3>organic potatoes</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>( 250 )</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                    <div class="price">Rs. __</div>
                    <div class="buttons">
                        <a href="#" class="buy">buy now</a>
                        <a href="#" class="cart">add to cart</a>
                    </div>
                </div>
                <div class="preview" data-target="p-13">
                    <i class="fas fa-times"></i>
                    <img src="image/13.png" alt="" />
                    <h3>organic potatoes</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>( 250 )</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                    <div class="price">Rs. __</div>
                    <div class="buttons">
                        <a href="#" class="buy">buy now</a>
                        <a href="#" class="cart">add to cart</a>
                    </div>
                </div>
                <div class="preview" data-target="p-14">
                    <i class="fas fa-times"></i>
                    <img src="image/14.png" alt="" />
                    <h3>organic potatoes</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>( 250 )</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                    <div class="price">Rs. __</div>
                    <div class="buttons">
                        <a href="#" class="buy">buy now</a>
                        <a href="#" class="cart">add to cart</a>
                    </div>
                </div>
                <div class="preview" data-target="p-15">
                    <i class="fas fa-times"></i>
                    <img src="image/15.png" alt="" />
                    <h3>organic potatoes</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>( 250 )</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                    <div class="price">Rs. __</div>
                    <div class="buttons">
                        <a href="#" class="buy">buy now</a>
                        <a href="#" class="cart">add to cart</a>
                    </div>
                </div>

                <div class="preview" data-target="p-16">
                    <i class="fas fa-times"></i>
                    <img src="image/16.png" alt="" />
                    <h3>organic potatoes</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>( 250 )</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                    <div class="price">Rs. __</div>
                    <div class="buttons">
                        <a href="#" class="buy">buy now</a>
                        <a href="#" class="cart">add to cart</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsPage;