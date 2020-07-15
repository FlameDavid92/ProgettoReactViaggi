import React from 'react';

export default function Documenti({description}) {
    return (
        <div className="row">
            <div className="col">
                <p>{description}</p>
            </div>
        </div>
    )
}