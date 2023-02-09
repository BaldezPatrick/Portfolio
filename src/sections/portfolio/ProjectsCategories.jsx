import React from 'react'
import { useState } from 'react'
import CategoryButton from './CategoryButton'

const ProjectsCategories = ({categories, onFilterProjects}) => {
    const [activeCategory, setActiveCategory] = useState('all')
    const changeCategoryHandler = (activeCat) => {
        setActiveCategory(activeCat)
        onFilterProjects(activeCat)
    }
  return (
    <div className="portfolio-categories">
        {
            categories.map(category => (
                <CategoryButton key={category} category={category} className={`btn cat-btn ${activeCategory == category ? 'primary' : 'white'}`} onChangeCategory={() => changeCategoryHandler(category)} />
            ))
        }
    </div>
  )
}

export default ProjectsCategories