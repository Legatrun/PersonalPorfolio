import TagsCanvas from 'react-tags-canvas'
import 'react-tags-canvas/dist/index.css'

export const TagCloud = () => {
  return (
    <TagsCanvas
      width="500"
      height="500"
      textColour={"#08fdd8"}
      maxSpeed={0.1}
      freezeActive
      shuffleTags
      shape='sphere'
      zoom={1}
      noSelect
      textFont={null}
      pinchZoom
      tags={[
        { value: 'Javascript', weight: 30 },
        { value: 'ReactJS', weight: 30 },
        { value: 'ExpressJS', weight: 30 },
        { value: 'Mongo', weight: 30 },
        { value: 'HTML5', weight: 20 },
        { value: 'CSS3', weight: 20 },
        { value: 'GitHub', weight: 20 },
        { value: 'Redux', weight: 20 },
        { value: 'NodeJS', weight: 20 },
        { value: 'Typescript', weight: 30 },
        { value: 'ES5/ES6', weight: 20 },
        { value: 'Jest', weight: 20 },
        { value: 'npm', weight: 30 },
        { value: 'Vite', weight: 20 },
        { value: 'MaterialUI', weight: 20 },
        { value: 'Boostrap', weight: 30 },
      ]}
    />
  )
}
