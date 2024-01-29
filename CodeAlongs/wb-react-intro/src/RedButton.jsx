function RedButton(props) {
    const alertMessage = () => {
        alert(props.message);
    }
    return (
        <button className="redButton" onClick={alertMessage}>
            {props.message}
        </button>
    )
}

export default RedButton;