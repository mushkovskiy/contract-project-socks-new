const React = require('react');
const Layout = require('./Layout');

module.exports = function Card({ el }) {
  return (

    <div className="item">
      <div className="buttons">
        <span className="deleteBtn" />
        <span className="likeBtn" />
      </div>
      <div className="image">
        <img width="70px" src={el} alt="" />
      </div>
      <div className="description">
        <span>White</span>
      </div>
      <div className="quantity">
        <button className="plusBtn" type="button" name="button">
          +
        </button>
        <input type="text" name="name" value="1" />
        <button className="minusBtn" type="button" name="button">
          -
        </button>
      </div>
      <div className="totalPrice">$549</div>
    </div>

  );
};
