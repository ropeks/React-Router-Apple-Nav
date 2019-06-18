import React from 'react';
import Nav from '../Nav/Nav';
import '../../App.css';


export default class NavHeader extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="nav-header">
                <div className="nav-container">
                    <div className="nav-content">
                        {
                            this.props.data.map(nav => {
                                return (
                                    <Nav key={nav.id} caption={nav.caption} />
                                );
                            })
                        }
                    </div>
                </div>
                
            </div>
        );
    }
}