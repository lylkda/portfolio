import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import works from './works.json';

const Samples = (props) => (
    
    <div style={{display: 'flex'}}>
        {works.map((item) => (
            <Image key={item.id} src={item.src} href={item.link}
                style={{ 'font-size': 120 }} avatar />
        ))}
    </div>
)

export default Samples