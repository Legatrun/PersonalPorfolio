import { TagCloud } from "../components"
import { PorfolioLayout } from "../layout/PorfolioLayout"
import './Skills.css'

export const Skills = () => {
    return (
        <PorfolioLayout className="skills home">
            <div className="skillsContainer">
                <h1>About me</h1>
                <p>
                    Hello, I am <strong className='TBbackground'>Merlo</strong> , I am a Brazilian who lives in Bolivia, I have always liked technology and finance, among my idols are <strong className='TBbackground idols elon'>Elon Musk</strong>, <strong className='TBbackground idols gates'>Bill Gates</strong> and <strong className='TBbackground idols buffett'>Warren Buffett</strong>
                    <br />
                    these are some of my skills:
                </p>
            </div>
            <TagCloud />
        </PorfolioLayout>
    )
}
