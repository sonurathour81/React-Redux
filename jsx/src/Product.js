import React from 'react';
import './SeasonDisplay.css';


class Product extends React.Component{
    render(){
        return(
            <div>
                <div><Cart /></div>
            </div>
        )
    }
}

export default Product;

class Cart extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            qty: 0,
            isCart: true
        }
    }
   

    addToCart = () =>{
        this.setState((state) => (
            {
                isCart: true,
                qty: state.qty + 1
            }
        ));
    };

   
    

    removeOne = () => {
        this.setState((state) => ({
            qty: state.qty > 0 ? state.qty - 1 : "disabled"
            }
        ));
    };
    
    showRemoveOneBtn = ()=> {
        if (this.state.qty <= 0) {
            return <button className="disabl comn-btn remv-btn">One item remove from Cart</button>
        }else{
            return <button onClick= {this.removeOne} className="comn-btn remv-btn" >One item remove from Cart</button>
        }
    }

    allRemove = () =>{
        this.setState({
            qty: 0,
            isCart: false
        });
    }

    componentDidMount(){
        console.log("Execute after render component");
        if (localStorage.getItem('qty')) {
            this.setState({
                qty: parseInt(localStorage.getItem('qty')),
            });
        };
    };
 
    componentDidUpdate(prevProps, prevState){
        localStorage.setItem('qty', this.state.qty);
        console.log("Component Updated");
        console.log(prevState, this.state);
    }


    render(){
        return(
            <div><br />
                <div>
                    <button onClick= {this.addToCart} className="comn-btn" >Add to Cart</button>
                </div><br /><br />
                <div className="texth2">
                    { this.state.isCart && <div><h2>Cart Item  {this.state.qty}</h2></div> }
                    {!this.state.isCart && <div><h2>Cart item has been removed</h2><h2>Item is : {this.state.qty}</h2></div>}
                </div>
                <br /><br />
                <div>
                    <button onClick={this.allRemove} className="comn-btn remv-btn" >All Item Remove</button>
                    &nbsp;&nbsp;&nbsp;{this.showRemoveOneBtn()}
                </div>
            </div>
        )
    }
}