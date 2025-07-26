export default function Footer({darkMode}) {
    return (
        <footer className={`${darkMode && "darkBackGround"}`}>
            <p>Hello Footer</p>
        </footer>
    )
}