function Button(props) {
    return (
        <button 
            onClick={props.onClick}
            style={props.style}
        >
            Press this button! { props.count ? props.count : null }
        </button>
    )
}

export default Button;