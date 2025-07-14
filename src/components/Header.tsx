import IconsConfig from "../config/Icons.config.ts";
import NavigationUtil from "../utilities/Navigation.util.ts";

export default function Header(){

    const scrollToOne: ()=>void = (): void => {
        NavigationUtil.scroll('one');

    }

    return (
        <header id="header">
            <div className="content">
                <h1><a href="#">ZenIcons</a></h1>
                <p>Just another iconic Framework for your site<br />
                    Easy to use and lightweight.

                </p>
                <p>
                    Now with more than 1500 icons to choose from.
                </p>
                <ul className="actions">
                    <li><a target={'_blank'} href={IconsConfig.downloadLink} className="download_pack button primary icon"><span className="zi-folder-download"></span> Download</a></li>
                    <li><a onClick={scrollToOne} className="button icon scrolly"> <span className="zi-circle-down"></span> Learn More</a></li>
                </ul>
            </div>
            <div className="image phone"><div className="inner"><img src="assets/img/ph.jpg" alt="" /></div></div>
        </header>
    );
}