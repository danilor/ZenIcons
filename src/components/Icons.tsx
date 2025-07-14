import {useState} from "react";
import IconsBlock from "./IconsBlock.tsx";

export default function Icons(){
    const [search, setSearch] = useState<string>('');
    return (
        <section id="one" className="wrapper style2 special icons_area">
            <div className="inner">
                <header className="major">
                    <h2>Icons</h2>
                </header>
                <section>
                    <form method="post" action="#">
                        <div className="row gtr-uniform">
                            <div className="col-12 col-12-xsmall">
                                <input type="search" name="search" id="search" value={search} onChange={(e: any) => setSearch(e.target.value)} placeholder="Search..." autoComplete={'off'}  />
                            </div>
                        </div>
                    </form>
                </section>

                <IconsBlock title={'ZenIcons'} definitionFile={'zenicons'} search={search} />
                <IconsBlock title={'IcoMoon'} definitionFile={'icomoon'} search={search} />

                <IconsBlock title={'NonIcon Programing'} definitionFile={'programing'} search={search} />

                <IconsBlock title={'Labor'} definitionFile={'labor'} search={search} />

                <IconsBlock title={'Home Assistant'} definitionFile={'home'} search={search} />

                <IconsBlock title={'Business'} definitionFile={'business'} search={search} />

                <IconsBlock title={'Brands'} definitionFile={'brands'} search={search} />

                <IconsBlock title={'RPG Gaming'} definitionFile={'rpg'} search={search} />

            </div>
            {/*<div id="iconInformation" className="modal">*/}
            {/*    <h4 className="icon-title"> <span className="zi-buddha"></span> ICON</h4>*/}
            {/*    <input type="text" readOnly={true} id="contentcopy" value="" />*/}
            {/*    <a href="javascript:void(0);" className="copy button primary small fit"> <span className="zi-copy"></span> Copy to Clipboard</a>*/}
            {/*</div>*/}
        </section>
    );
}