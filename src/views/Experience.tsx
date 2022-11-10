import { PorfolioLayout } from "../layout/PorfolioLayout"
import './Experience.css'

export const Experience = () => {
    return (
        <PorfolioLayout className="home experience">
            <div className="textExperience">
                <h1>Experience</h1>
                <p>I have experience in these branches:</p>
            </div>


            <div className="skillsExperience">
                <div className="skills-bar">
                    <div className="bar">
                        <div className="info">
                            <span>React</span>
                        </div>
                        <div className="progress-line html"><span></span></div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>Redux</span>
                        </div>
                        <div className="progress-line jquery"><span></span></div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>Node</span>
                        </div>
                        <div className="progress-line node"><span></span></div>
                    </div>

                    <div className="bar">
                        <div className="info">
                            <span>Express</span>
                        </div>
                        <div className="progress-line python"><span></span></div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>Mongo</span>
                        </div>
                        <div className="progress-line mysql"><span></span></div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>html</span>
                        </div>
                        <div className="progress-line html2"><span></span></div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>css</span>
                        </div>
                        <div className="progress-line css"><span></span></div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>javascript</span>
                        </div>
                        <div className="progress-line javascript"><span></span></div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>typescript</span>
                        </div>
                        <div className="progress-line typescript"><span></span></div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>git-github</span>
                        </div>
                        <div className="progress-line github"><span></span></div>
                    </div>
                </div>
            </div>
        </PorfolioLayout>
    )
}
