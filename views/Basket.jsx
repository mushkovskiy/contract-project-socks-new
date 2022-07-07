const React = require('react');
const Layout = require('./Layout');

module.exports = function Basket({ socks }) {
  return (
    <Layout>
      <div className="shoppingCart">
        <div className="title">
          Shopping Bag
        </div>
        {socks.map((sock)(
          <>
            <div className="item">
              <div className="buttons">
                <span className="deleteBtn" />
                <span className="likeBtn" />
              </div>
              <div className="image">
                <img src="item-1.png" alt="" />
              </div>
              <div className="description">
                <span>White</span>
              </div>
            </div>
            <div className="quantity">
              <button className="plusBtn" type="button" name="button">
                <img src="/img/plus.svg" alt="" />
              </button>
              <input type="text" name="name" value="1" />
              <button className="minusBtn" type="button" name="button">
                <img src="/img/minus.svg" alt="" />
              </button>
            </div>
            <div className="totalPrice">$549</div>
          </>,
        ))}
      </div>
    </Layout>
  );
};
