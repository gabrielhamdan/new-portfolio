import './MenuButton.css'

export default function MenuButton(props) {
    const selectBtn = btn => {
        const btns = Array.from(btn.parentElement.children);
        
        btns.forEach(child => {
            child.classList.remove("selected");
        });

        btn.classList.add("selected");
    }

    return(
        <a 
            className={props.btnStyle}
            href={props.link}
            onClick={e => {
                selectBtn(e.target);
                props.onClick?.func(props.onClick.arg)
            }}
        >
            {props.label}
        </a>
    )
}