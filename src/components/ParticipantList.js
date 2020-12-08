import React, { Component } from 'react'
import PData from '../resources/data.json'


class ParticipantList extends Component {
    render () {
        return(
            <React.Fragment>
                {PData.map( participant =>
                    <React.Fragment key={participant.userID}>
                        <p>{participant.userID}</p>
                        <p>{participant.firstName}</p>
                        <p>{participant.lastName}</p>
                    </React.Fragment>
                )}
            </React.Fragment>
            /*<div>
                {PData.map(participant =>{
                    return <div key={participant.id}>
                        <h1>{participant.id}</h1>
                        <p>{participant.firstName}</p>
                        <p>{participant.lastName}</p>
                        {participant.lastKnownLocation.map( location =>{
                            return <div>
                                <p>{location.latitude}</p>
                                <p>{location.longitude}</p>
                            </div>
                        })}
                    </div>
                })}
            </div>*/
        )
    }   
}

export default ParticipantList