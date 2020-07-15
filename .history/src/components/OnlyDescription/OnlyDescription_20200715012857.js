import React from 'react';

export default function OnlyDescription({description,name}) {
    console.log("OnlyDescription   ",name);
    return (
        <div className="row mt-2">
            <div className="col-12">
                {name && (<h4 className="title">{name}</h4>)}
            </div>
            <div className="col-12">
                <p className="mediumText">{description}</p>
            </div>
        </div>
    )
}