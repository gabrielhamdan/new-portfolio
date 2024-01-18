import "./ProjectCard.css"

export default function ProjectCard(props) {
    const imgSrc = `/new-portfolio/src/assets/project_images/${props.imgId}.png`;
    
    return (
        <a href={props.link} target="_blank">
            <div className="project-card-container">
                {props.imgId > 0 &&

                    <img src={imgSrc} alt="project image" className="project-card-image" />
                }

                <div className="project-card-text-container">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </a>
    )
}