import { PorfolioLayout } from "../layout/PorfolioLayout"
import './Projects.css'

export const Projets = () => {
    return (
        <PorfolioLayout className="home projects">
            <h1>My Portfolio</h1>
            <p>There are some of the projects I have done</p>


            <div className="containerProjects">
                <div className="boxProjects">
                    <span></span>
                    <div className="contentProjects">
                        <h2>Task Schedule</h2>
                        <p>This is a calendar for teams, where they can record their activities, all team members can see each other's tasks, but only the creator of the task can modify it</p>
                        <a href="https://calendarappjair.netlify.app">Read More</a>
                    </div>
                </div>

                <div className="boxProjects">
                    <span></span>
                    <div className="contentProjects">
                        <h2>Journal</h2>
                        <p>This is a personal diary where you can write down your tasks, you can also upload one or more images related to that activity, you can also delete and modify each task</p>
                        <a href="https://journalappofjair.netlify.app" target="_blank">Read More</a>
                    </div>
                </div>

                <div className="boxProjects">
                    <span></span>
                    <div className="contentProjects">
                        <h2>Gif Finder</h2>
                        <p>This is a fun app where you can search for gifs of your favorite series, just put the title in the search engine and you will have it</p>
                        <a href="https://gifsearchjair.netlify.app" target="_blank">Read More</a>
                    </div>
                </div>
                <div className="boxProjects">
                    <span></span>
                    <div className="contentProjects">
                        <h2>Social Media</h2>
                        <p>This is a panel where you can see the statistics of your social networks.</p>
                        <a href="https://socialmediajair.netlify.app" target="_blank">Read More</a>
                    </div>
                </div>

                <div className="boxProjects">
                    <span></span>
                    <div className="contentProjects">
                        <h2>Not Found Page</h2>
                        <p>Funny responsive not found page with animation and halloween theme.</p>
                        <a href="https://notfoundpagejair.netlify.app" target="_blank">Read More</a>
                    </div>
                </div>

                <div className="boxProjects">
                    <span></span>
                    <div className="contentProjects">
                        <h2>In Process...</h2>
                        <p>you can find all the repositories of these projects in my github, I leave the link below.</p>
                        <a href="https://github.com/Legatrun" target="_blank">Read More</a>
                    </div>
                </div>
            </div>
        </PorfolioLayout>
    )
}
