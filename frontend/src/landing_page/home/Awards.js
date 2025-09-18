import React from 'react';
function Awards() {
    return ( 
       <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 p-5'>
                <img src='images/largestBroker.svg'/>
            </div>
            <div className='col-6 p-5 mt-5'>
                <h1>Largest stock brocker in India</h1>
                <p className="mb-5">2+ million zerodha clients contribute to over 15% of all retail order volumes in india daily by tradiong and investing in :</p>
                <div className="row mt-5 mb-3">
                <div className='col-6'>
                    <ul>
                        <li>
                            <p>Features and Options</p>
                        </li>
                        <li>
                            <p>Features and Options</p>
                        </li>
                        <li>
                            <p>Features and Options</p>
                        </li>
                    </ul>
                </div>
                <div className='col-6'>
                     <ul>
                        <li>
                            <p>Features and Options</p>
                        </li>
                        <li>
                            <p>Features and Options</p>
                        </li>
                        <li>
                            <p>Features and Options</p>
                        </li>
                    </ul>
                </div>
                </div>
                <img src="images\pressLogos.png"  style={{width:"90%" }} />
            </div>
        </div>
       </div>
     );
}

export default Awards;