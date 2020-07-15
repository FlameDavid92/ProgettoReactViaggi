import React from 'react';

export default function OnlyDescription({description}) {
    return (
        <div className="row">
            <div className="col">
                <p>{description}</p>
            </div>
        </div>
    )
}