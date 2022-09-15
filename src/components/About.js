import React, { useState } from 'react'

export default function About(props) {



    const [myStyle, setmyStyle] = useState({

        color: 'black',
        backgroundColor: 'white'
    })


    const [btnText, setbtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if (props.mode === 'light') {
            setmyStyle({
                backgroundColor: 'black',
                color: 'white',
                border: "1px solid white"
            })
            setbtnText("Enable Light Mode")
        }
        else {
            setmyStyle({
                backgroundColor: 'white',
                color: 'black'
            })
            setbtnText("Enable Dark Mode")

        }
    }

    return (
        <>
            <div className="container mx-18">
            <h1>About Us</h1>
            <div style={{color:props.mode==='light'?'black':'white'}} className="accordion" id="accordionExample">
                <div style={{color:props.mode==='light'?'black':'white'}} className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button style={{color:props.mode==='light'?'white':'black'}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div style={myStyle} className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div style={myStyle} className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btnText}</button>
                
                {/* Radio buttion */}
                {/* <div className="form-check form-switch" >
                    <input onClick={toggleStyle} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" for="flexSwitchCheckDefault">{btnText}</label>
                </div> */}
            </div>
            </div>
        </>
    )
}
