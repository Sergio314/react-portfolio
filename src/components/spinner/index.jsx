import * as React from 'react';

import './style.scss';

const Spinner = () => (
	<div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default Spinner;