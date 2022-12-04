import React from 'react'
import Typical from 'react-typical'

function Text() {
    return (
        <div className='text-body'>
            <header className='text-header'>
                <h1>Hi, I'm Burak FİLİZ</h1>
                <p>
                    I'm a
                    <Typical
                        
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Front-end Developer',
                            1000,
                            'Web Designer',
                            1000,
                            'Industrial Engineer',
                            1000,
                           

                        ]}
                    />

                </p>
            </header>
        </div>
    )
}

export default Text