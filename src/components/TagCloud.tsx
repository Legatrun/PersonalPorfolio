import TagsCanvas from 'react-tags-canvas'
import 'react-tags-canvas/dist/index.css'

import './TagCloud.css'

export const TagCloud = () => {

  let width = 500

  if (window.innerWidth > 500) {
    width = 500
  } else {
    width = window.innerWidth
  }

  return (
    <div
      className='tagCloud'
    >
      <TagsCanvas
        id="myCanvas"
        width={width}
        height={width}
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
          { value: 'ReactJS', weight: 30 },
          { value: 'Redux', weight: 20 },
          { value: 'ExpressJS', weight: 30 },
          { value: 'Boostrap', weight: 30 },
          { value: 'CSS3', weight: 20 },
          { value: 'MaterialUI', weight: 20 },
          { value: 'Mongo', weight: 30 },
          { value: 'Typescript', weight: 30 },
          { value: 'Javascript', weight: 30 },
          { value: 'GitHub', weight: 20 },
          { value: 'Jest', weight: 20 },
          { value: 'npm', weight: 30 },
          { value: 'HTML5', weight: 20 },
          { value: 'NodeJS', weight: 20 },
          { value: 'ES5/ES6', weight: 20 },
          { value: 'Vite', weight: 20 },
        ]}
      />
    </div>
  )
}
