import React from 'react';

export default function OnlyDescription({description,name}) {
    console.log("OnlyDescription   ",name);
    return (
        <div className="row">
            <div className="col">
                <p>{description}</p>
            </div>
        </div>
    )
}