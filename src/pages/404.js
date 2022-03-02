import React from 'react';
import Image from 'react-image-resizer';
import cur from './404.gif';

function NotFoundPage() {

    return (
      <div>
        <Image src={cur} alt="cur" className="center"/>
      </div>
    );

}

export default NotFoundPage;




.center{
text-align:center;//for texts
height:100%;
display:flex; 
align-items:center;
justify-content:center;
