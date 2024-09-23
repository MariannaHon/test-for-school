

const Participant = ({ participant: { name, email } }) => {
    return (
        <div>
            <h4>{name}</h4>
            <p>{email}</p>
        </div>
    )
}

export default Participant
