import React, { Component } from 'react'
import { findCategoryById, getModuleById } from './utils';

export default class DetailPage extends Component {
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
    componentDidMount = async () => {
        const {
            module_name,
            brand,
            category_id,
            image,
            size,
            description,
            in_stock,
            price } = await getModuleById(this.props.match.params.moduleId);

        this.setState({
            module_name,
            brand,
            category_id,
            image,
            size,
            description,
            in_stock,
            price
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                Detail Page
            </div>
        )
    }
}
