
function Hello(props: { name: string }) {
    return (
        <>
        <div className="greeting"> Hello {props.name}</div>
        </>
    )
}

export default Hello;