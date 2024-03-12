import React from 'react';

export const DiscourageMessage: React.FC = () => {

    return(
        <div className = "DISCOURAGE_MESSAGE mt-3">
            <h2 className="ml-2 mr-2 text-xl text-black font-semibold">Your bag still has quite the journey to you!</h2>
            <h2 className="ml-2 mr-2 mb-2 text-sm text-black font-semibold text-wrap">You don't have to head to the baggage claim right now. Let's make everyone's journey a pleasant one :D</h2>
        </div>
    );
};


export const EncourageMessage: React.FC = () => {

    return(
        <div className = "ENCOURAGE_MESSAGE mt-3">
            <h2 className="ml-2 mr-2 text-xl text-black font-semibold">Your bag is almost there!</h2>
            <h2 className="ml-2 mr-2 mb-2 text-sm text-black font-semibold text-wrap">You should start heading to the baggage claim now.</h2>
        </div>
    );
};

export const HurryMessage: React.FC = () => {

    return(
        <div className = "HURRY_MESSAGE mt-3">
            <h2 className="ml-2 mr-2 text-xl text-black font-semibold">Your bag is waiting for you!</h2>
            <h2 className="ml-2 mr-2 mb-2 text-sm text-black font-semibold text-wrap">You should start heading to the baggage claim now.</h2>
        </div>
    );
};
