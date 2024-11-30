
const ListItem = ({title,description} ) => {
    return (
        <div className="fancy-shadow-card">
            <span className="card-title">{title}</span>
            <span>{description}</span>
        </div>
    )
}

export default ListItem
