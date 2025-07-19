
export default function Header({FontAwesomeIcon, faFolder}) {
    return (
        <>
            <nav>
                <FontAwesomeIcon icon={faFolder} className="fa-regular"/>
                <h1>Kouki Check</h1>
            </nav>
        </>
    )
}