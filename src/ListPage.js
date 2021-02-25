import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllModules } from './utils';

export default class ListPage extends Component {
    state = {
        modules: []
    }
    componentDidMount = async () => {
        const modules = await getAllModules();
        this.setState({
            modules,
        });
    }
    render() {
        return (
            <div className="moduleList">
                {this.state.modules.map(module => {
                        return <Link to={`/modules/${module.id}`} className="moduleDiv" key={module.id}>
                            <div className="innerDiv">
                                <div>
                                    <p>{module.module_name}</p>
                                    <p>{module.brand}</p>
                                    <p>Category: {module.category_name}</p>
                                </div>
                                <div>
                                    <img src={module.image} />
                                    <p>{module.size}HP</p>
                                </div>
                                <div>
                                    <p>{module.description}</p>
                                    <p>{module.in_stock ? 'In Stock' : 'Out of Stock'}</p>
                                    <p>${module.price}</p>
                                </div>
                            </div>
                        </Link>
                })}
            </div>
        )
    }
}
