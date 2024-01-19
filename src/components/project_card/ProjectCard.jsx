import "./ProjectCard.css"

export default function ProjectCard(props) {
    return (
        <a href={props.link} target="_blank">
            <div className="project-card-container">
                <div className="project-card-text-container">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </a>
    )
}