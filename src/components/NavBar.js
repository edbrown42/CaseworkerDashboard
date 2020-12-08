import React, { Component } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

export class NavBar extends Component {

    constructor(props) {
        super(props);

        this.items = [
            {
                label: 'Caseworker Dashboard',
            },
        ];
    }

    render() {
        const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="p-mr-2"></img>;
        const end = <InputText placeholder="Search" type="text" />;

        return (
            <div className="topBar">
                <div className="card">
                    <Menubar model={this.items} start={start} />
                </div>
            </div>
        );
    }
}

export default NavBar;
