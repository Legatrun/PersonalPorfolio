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
            <div className='cohete'>
                <div className="containerFlame">
                    <div className="wrapper flame1">
                        <div className="flame-wrapper">
                            <div className="flame red"></div>
                            <div className="flame orange"></div>
                            <div className="flame gold"></div>
                            <div className="flame white"></div>
                            <div className="base blue"></div>
                            <div className="base black"></div>
                        </div>
                    </div>
                    <div className="wrapper flame2">
                        <div className="flame-wrapper">
                            <div className="flame red"></div>
                            <div className="flame orange"></div>
                            <div className="flame gold"></div>
                            <div className="flame white"></div>
                            <div className="base blue"></div>
                            <div className="base black"></div>
                        </div>
                    </div>
                    <div className="wrapper flame3">
                        <div className="flame-wrapper">
                            <div className="flame red"></div>
                            <div className="flame orange"></div>
                            <div className="flame gold"></div>
                            <div className="flame white"></div>
                            <div className="base blue"></div>
                            <div className="base black"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

