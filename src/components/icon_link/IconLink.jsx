import "./IconLink.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function IconLink(prpos) {
    return (
        <div className="icon-link-container">
            <a className="icon-link" href={prpos.link} target="_blank">
                <FontAwesomeIcon icon={prpos.icon} />
            </a>
        </div>
    )
}