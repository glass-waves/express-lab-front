import React, { Component } from 'react'

export default class ModuleList extends Component {
    render() {
        const data = this.props.data;
        const length = data.length;
        return (
            <div className="container">
                {data.map(item => {
                    return <div className="moduleDiv">
                        <p>{item._id}</p>
                        <p>{item.brand}</p>
                        <p>{item.moduleName}</p>
                        <p>{item.category}</p>
                        <p>{item.size}</p>
                        <p>{item.description}</p>
                        <p>${item.price}</p>
                        <p>{item.inStock ? <span>In Stock</span> : <span>Out of Stock</span>}</p>
                        <img src={item.image} />
                    </div>
                })}
            </div>
        )
    }
}
