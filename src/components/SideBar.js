import React, { Component } from 'react';
import { Menu } from 'primereact/menu';
//import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';

export class SideBar extends Component {

    constructor(props) {
        super(props);
        //console.log(props.sidebar)
        //make list of participants for side menu
        let namelist = (props.sidebar).map(participant =>(
            //{label: participant.lastName + ", " + participant.firstName}
            {label: participant.lastName + ", " + participant.firstName} //first name is stored at index 1, last at index 2
        ))
        //console.log(namelist)

        this.items = [
            {
                label: 'List of Participants',
                items: namelist /*[ 
                    {
                        label: 'Person 1',
                    },
                    {
                        label: 'Person 2',
                    },
                    
                ]*/
            }
        ];
        //console.log(this.items)
    }

    render() {
        return (
            <div>
                <Toast ref={(el) => { this.toast = el; }}></Toast>

                <div className="card">
                    <InputText placeholder="Search" type="text" />;
                    <Menu model={this.items} />
                </div>
            </div>
        )
    }
}

export default SideBar;
