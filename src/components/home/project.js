import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Project = ({ project, right }) => {
    const { urls, title, description, techs } = project
    return (
        <ScrollAnimation
            animateIn={right ? `rotate-in-right` : `rotate-in-left`}
            animateOnce={true}
        >
            <div className={right ? `project right` : `project`}>
                <a href={urls.link} target="_blank" rel="noopener noreferrer">
                    <img src={urls.thumbnail} alt={title} />
                </a>
                <div className="project-info">
                    <a href={urls.link} target="_blank" rel="noopener noreferrer">
                        <h3>{title}</h3>
                    </a>
                    <ul className="tags">
                        {techs.map(({ tech }) => (
                            <li key={tech}>
                                <span>{tech}</span>
                            </li>
                        ))}
                    </ul>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                    <a
                        href={urls.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button"
                    >
          Live Project
                    </a>
                    {urls.repo ? (
                        <a
                            href={urls.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button secondary"
                        >
            Project Code
                        </a>
                    ) : (
                        <p className="no-code">Private Repo, code available on request</p>
                    )}
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default Project
