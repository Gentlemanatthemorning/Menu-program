import React from "react";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  receiveItem = product => {
    this.setState({
      list: [...this.state.list, product]
    });
  };
  render() {
    let list = this.state.list.map((e, i) => {
      return <li key={i}>{e}</li>;
    });
    return (
      <div>
        <ShopItem onBuy={this.receiveItem} title="skarpetki" />
        <ShopItem onBuy={this.receiveItem} title="koszula" />
        <ShopItem onBuy={this.receiveItem} title="pończochy" />
        <ul>{list}</ul>
      </div>
    );
  }
}

class ShopItem extends React.Component {
  handleClick = () => {
    if (typeof this.props.onBuy === "function") {
      this.props.onBuy(this.props.title);
    }
  };

  render() {
    return (
      <article>
        <h1>{this.props.title}</h1>
        <button onClick={this.handleClick}>Kup</button>
      </article>
    );
  }
}

export default Shop;
