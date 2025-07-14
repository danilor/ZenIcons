import IconsConfig from "../config/Icons.config.ts";
import NavigationUtil from "../utilities/Navigation.util.ts";

export default function LetsStart() {

    const scrollToFour: ()=>void = (): void => {
        NavigationUtil.scroll('four');

    }

    return (
        <section id="three" className="wrapper style2 special">
            <header className="major">
                <h2>Let's start!</h2>
                <p>Now that you get the idea behind the ZenIcons Framework; why you just give it a try? <br />Here you will find all the instructions to start using it in no time</p>
            </header>
            <ul className="actions special">
                <li><a target={'_blank'} href={IconsConfig.downloadLink} className="download_pack button primary icon fa-download"> <span className="zi-folder-download"></span> Download</a></li>
                <li><a onClick={scrollToFour} className="button scrolly"> <span className="zi-circle-down"></span> Get Started</a></li>
            </ul>
        </section>
    );
}