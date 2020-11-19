import React, { Component } from 'react';
import { Menu } from 'primereact/menu';
//import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export class SideBar extends Component {

    constructor(props) {
        super(props);

        this.items = [
            {
                label: 'Participant Options',
                items: [
                    {
                        label: 'Add',
                        icon: 'pi pi-fw pi-user-plus',
                        command: () => {
                            this.toast.show({ severity: 'success', summary: 'Updated', detail: 'Data Added', life: 1000 });
                        }
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-fw pi-user-minus',
                        command: () => {
                            this.toast.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 1000 });
                        }
                    }
                ]
            },
            {
                label: 'List of Participants',
                items: [
                    {
                        label: 'Person 1',
                    },
                    {
                        label: 'Person 2',
                    },
                    {
                        label: 'Person 3',
                    },
                    {
                        label: 'Person 4',
                    },
                    {
                        label: 'Person 5',
                    },
                    {
                        label: 'Person 6',
                    },
                    {
                        label: 'Person 7',
                    },
                    {
                        label: 'Person 8',
                    },
                    {
                        label: 'Person 9',
                    },
                    {
                        label: 'Person 10',
                    },
                    {
                        label: 'Person 11',
                    },
                    {
                        label: 'Person 12',
                    },
                    {
                        label: 'Person 13',
                    },
                    {
                        label: 'Person 14',
                    },
                    {
                        label: 'Person 15',
                    },
                    {
                        label: 'Person 16',
                    },
                    {
                        label: 'Person 17',
                    },
                    {
                        label: 'Person 18',
                    },
                    {
                        label: 'Person 19',
                    },
                    {
                        label: 'Person 20',
                    },
                ]
            }
        ];
    }

    render() {
        return (
            <div>
                <Toast ref={(el) => { this.toast = el; }}></Toast>

                <div className="card">
                    <Menu model={this.items} />
                </div>
            </div>
        )
    }
}

export default SideBar;
