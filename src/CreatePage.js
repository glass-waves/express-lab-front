import React, { Component } from 'react'
import { insertNewModule } from './utils'

export default class CreatePage extends Component {
    state = {
        module_name: '',
        brand: '',
        category_id: 1,
        image: '',
        size: 2,
        description: '',
        in_stock: false,
        price: 1
    }
    handleNameChange = (e) => {
        this.setState({
            module_name: e.target.value
        })
    }
    handleBrandChange = (e) => {
        this.setState({
            brand: e.target.value
        })
    }
    handleCategoryChange = async (e) => {
        this.setState({
            category_id: Number(e.target.value)
        })
    }
    handleImageChange = (e) => {
        this.setState({
            image: e.target.value
        })
    }
    handleSizeChange = (e) => {
        this.setState({
            size: Number(e.target.value)
        })
    }
    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }
    handleStockChange = (e) => {
        this.setState({
            in_stock: !this.state.in_stock
        })
    }
    handlePriceChange = (e) => {
        this.setState({
            price: Number(e.target.value)
        })
    }
    submitHandler = async (e) => {
        e.preventDefault();
        await insertNewModule(this.state);
        alert(`New Module Inserted: ${this.state}`)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>
                        Module Name
                        <input type="text" value={this.state.module_name} onChange={this.handleNameChange}/>
                    </label>
                    <label>
                        Module Brand
                        <input type="text" value={this.state.brand} onChange={this.handleBrandChange}/>
                    </label>
                    <label>
                        Category
                        <select value={this.state.category} onChange={this.handleCategoryChange}>
                            <option value={1}>Oscillator</option>
                            <option value={2}>Filter</option>
                            <option value={3}>Envelope</option>
                            <option value={4}>VCA</option>
                        </select>
                    </label>
                    <label>
                        Image
                        <input type="text" value={this.state.image} onChange={this.handleImageChange}/>
                    </label>
                    <label>
                        Size
                        <input type="number" value={this.state.size} onChange={this.handleSizeChange}/>
                    </label>
                    <label>
                        Description
                        <input type="text" value={this.state.description} onChange={this.handleDescriptionChange}/>
                    </label>
                    <label>
                        In Stock?
                        <input type="checkbox" value={this.state.in_stock} onChange={this.handleStockChange}/>
                    </label>
                    <label>
                        Price
                        <input type="number" value={this.state.price} onChange={this.handlePriceChange}/>
                    </label>
                    <button>Create Module</button>
                </form>
            </div>
        )
    }
}
