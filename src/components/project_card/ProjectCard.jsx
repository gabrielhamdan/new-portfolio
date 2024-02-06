import ProjectTag from "../project_tag/ProjectTag"
import "./ProjectCard.css"

export default function ProjectCard(props) {
    return (
        <a href={props.link} target="_blank">
            <div className="project-card-container">
                <div className="project-card-text-container">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>

                <div className="tag-container">
                    {
                        props.tags.map((tag, key) => {
                            return <ProjectTag key={key} tagName={tag} />
                        })
                    }
                </div>
            </div>
        </a>
    )
}