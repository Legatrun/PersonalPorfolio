import './Greeting.css'

export const Greeting = () => {
    return (
        <div className="view">
            <div className="containerGreeting">
                <div className="box1Greeting">
                    <h1> <strong className=''>Hi.</strong> </h1>
                    <h1>I'm <strong className='TBbackground'>Jair</strong> </h1>
                </div>
                <div className="box2Greeting">
                    <div className="lightbar"></div>
                    <div className="topLayer"></div>
                    <h2>web developer</h2>
                </div>
            </div>
        </div>
    )
}

