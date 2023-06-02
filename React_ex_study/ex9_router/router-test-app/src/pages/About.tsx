import React from 'react'

type Props = {title : string};
const About = (prop : Props) => {
    return (
        <div className='card card-body'>
            <h2>About{prop.title}</h2>        
        </div>
    )
}
export default About;