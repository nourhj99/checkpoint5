import React from 'react';

export default function Profile({person}) {

    const onSimpleClick = () => {
        window.location.href = person.profileLink
    }

    
    const {name, profileLink, photo} = person

    return (
        <div>

            <img src={photo} alt='photo' style={{ width: 200 }} />
            <p style={{ backgroundColor: 'green' }}>{name.firstName} {name.lastName}</p>
            {
                (profileLink != "") ? (<button
                    onClick={onSimpleClick}
                    style={{ backgroundColor: "lightgreen", width: 100, height: 50, textDecorationColor: "black" }}>
                    Facebook </button>) : (<p>Button is hidden</p>)
            }
        </div>
    )
}