import React from 'react';
import '../Styles/ProposalStatus.css';

const ProposalStatus = () => {
    return (
        <> 
            <div className="proposal-status-area">
                <div className="text-area">
                    <p id="header-text">Proposal Status</p>
                    <p id="normal-text">Select your proposals as their current status</p>
                </div>
                <div class="btn-group">
                    <button>Active</button>
                    <button>Pending</button>
                    <button>Archive</button>
                </div>
            </div>
        </>
    );
};

export default ProposalStatus;