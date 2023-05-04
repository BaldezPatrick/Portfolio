import React from 'react'
import { useState } from 'react'
import CategoryButton from './CategoryButton'

const ProjectsCategories = ({categories, onFilterProjects}) => {
    const [activeCategory, setActiveCategory] = useState('all')
    const changeCategoryHandler = (activeCat) => {
        setActiveCategory(activeCat)
        onFilterProjects(activeCat)
    }

    const buttonMapping = categories.map((category) => (
      <CategoryButton
        key={category}
        category={category}
        className={`btn cat-btn ${
          activeCategory == category ? 'primary' : 'white'
        }`}
        onChangeCategory={() => changeCategoryHandler(category)}
      />
    ))

    return <div className="portfolio-categories">{buttonMapping}</div>
}

export default ProjectsCategories