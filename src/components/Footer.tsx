export default function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <footer id="footer">
            <ul className="icons">
                <li><a href="https://www.twitter.com/arkofdan" target="_blank"><span className="zi-twitter"></span></a></li>
                <li><a href="https://github.com/danilor" target="_blank"><span className="zi-github"></span></a></li>
                <li><a href="https://www.linkedin.com/in/daniloramirezcr/" target="_blank"><span className="zi-linkedin"></span></a></li>

                <li><a href="https://steamcommunity.com/id/arkofdan" target="_blank"><span className="zi-steam2"></span></a></li>
                <li><a href="https://www.youtube.com/channel/UCaDhiGuSlPGW_WvGhfLIQ6A" target="_blank"><span className="zi-youtube"></span></a></li>

            </ul>
            <p className="copyright">&copy; Copyright <span id="year">{currentYear}</span> ZenIcons. Danilo Ramírez Mattey</p>
        </footer>
    );
}