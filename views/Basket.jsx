const React = require('react');
const Layout = require('./Layout');

const Card = require('./Card');

function Basket({ socks }) {
  return (
    <Layout>
      <div className="shoppingCart">
        <div className="title">
          Shopping Bag
        </div>
        {socks.map((el) => (<Card el={el} />))}
      </div>
    </Layout>
  );
}
module.exports = Basket;
