import IconsConfig from "../config/Icons.config.ts";

export default function Instructions() {
    return (
        <section id="four" className="wrapper">
            <div className="inner">
                <header className="major">
                    <h2>Getting Started</h2>
                </header>
                <section>
                    <h4>Downloading and Installing</h4>
                    <p>You can download the latest version of ZenIcons from <a href={IconsConfig.downloadLink} target={'_blank'} className="download_pack">here</a>. After downloading it, place it next to the project where you want to use it.</p>
                    <p>
                        After that, put the following line of code between the &lt;head&gt;&lt;/head&gt; tags:
                    </p>
                    <pre><code>&lt;link id="ZenIcons" rel="stylesheet" href="dist/fonts.css" /&gt;</code></pre>

                    <p>
                        Or you can use the following CDN link to include it directly from the internet:
                    </p>
                    <pre><code>&lt;link id="ZenIcons" rel="stylesheet" href="https://cdn.statically.io/gh/danilor/ZenIcons/master/dist/fonts.css" /&gt;</code></pre>

                    <p>
                        With just that line, you are ready to use all the icons in ZenIcons. Easy-peasy! right?
                    </p>
                </section>

                <section>
                    <h4>Basic Use of the Font</h4>
                    <p>Now you are ready to use any icon you want in your code. Just select one of our icons
                        and add it to your code. You can click on the icon and copy the code or use your own.</p>
                    <pre><code>&lt;i className="zi-copy"&gt;&lt;/i&gt;</code></pre>
                    <p>This will display the following result</p>
                    <div className="text-center">
                        <i className="zi-copy"></i>
                    </div>

                    <p>But it won't work only with the "i" tag. You can use other tags, for example:</p>
                    <pre><code>&lt;span className="zi-folder-download"&gt;&lt;/span&gt;</code></pre>
                    <p>This will display the following result</p>
                    <div className="text-center">
                        <span className="zi-folder-download"></span>
                    </div>
                    <p>And you can combine these icons with text without any trouble.</p>
                    <pre><code>&lt;span className="zi-home"&gt;&lt;/span&gt; Home</code></pre>
                    <p>This will display the following result</p>
                    <div className="text-center">
                        <span className="zi-home"></span> Home
                    </div>
                    <p>
                        Or you can use them in lists or menus
                    </p>
                    <pre>
                        <code>&#x3C;ul&#x3E;
                        &#x3C;li&#x3E;&#x3C;span className=&#x22;zi-home&#x22;&#x3E;&#x3C;/span&#x3E; Home&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;&#x3C;span className=&#x22;zi-book&#x22;&#x3E;&#x3C;/span&#x3E; Books&#x3C;/li&#x3E;
                        &#x3C;/ul&#x3E;</code>
                    </pre>
                    <div className="">
                        <div style={{ width: '500px', maxWidth: '90%', marginLeft: 'auto', marginRight: 'auto', border: '1px dotted gray', padding: '20px' }}>
                            <ul>
                                <li><span className="zi-home"></span> Home</li>
                                <li><span className="zi-book"></span> Books</li>
                            </ul>
                        </div>
                    </div>

                </section>

                <section>
                    <br />
                    <h4>Sizing</h4>
                    <p>As any other font, you can use your CSS skills to modify the size of the icons; or you can
                        use some special classes that ZenIcons provides to take care of this using our Framework.</p>
                    <pre><code> &#x3C;div className=&#x22;text-center&#x22;&#x3E;
                        &#x3C;span className=&#x22;zi-home&#x22;&#x3E;&#x3C;/span&#x3E; zi-home
                        &#x3C;/div&#x3E;
                        &#x3C;div className=&#x22;text-center&#x22;&#x3E;
                        &#x3C;span className=&#x22;zi-home zif-2x&#x22;&#x3E;&#x3C;/span&#x3E; zi-home zif-2x
                        &#x3C;/div&#x3E;
                        &#x3C;div className=&#x22;text-center&#x22;&#x3E;
                        &#x3C;span className=&#x22;zi-home zif-3x&#x22;&#x3E;&#x3C;/span&#x3E; zi-home zif-3x
                        &#x3C;/div&#x3E;
                        &#x3C;div className=&#x22;text-center&#x22;&#x3E;
                        &#x3C;span className=&#x22;zi-home zif-4x&#x22;&#x3E;&#x3C;/span&#x3E; zi-home zif-4x
                        &#x3C;/div&#x3E;</code></pre>
                    <div style={{ display: 'grid', gridGap: '10px', gridTemplateColumns: 'auto auto auto auto' }}>
                        <div className="text-center">
                            <span className="zi-home"></span> zi-home
                        </div>
                        <div className="text-center">
                            <span className="zi-home zif-2x"></span> zi-home zif-2x
                        </div>
                        <div className="text-center">
                            <span className="zi-home zif-3x"></span> zi-home zif-3x
                        </div>
                        <div className="text-center">
                            <span className="zi-home zif-4x"></span> zi-home zif-4x
                        </div>
                    </div>
                </section>

                <section>
                    <h4>Spinning</h4>
                    <p>In addition, you can use our spinner class to create your own loading icons.</p>
                    <div style={{ display: 'grid', gridGap: '10px', gridTemplateColumns: 'auto auto auto auto auto auto' }}>
                        <div className="text-center">
                            <span className="zi-spinner zif-spin-reverse"></span>
                        </div>
                        <div className="text-center">
                            <span className="zi-spinner2 zif-spin"></span>
                        </div>
                        <div className="text-center">
                            <span className="zi-spinner3 zif-spin-reverse zif-2x "></span>
                        </div>
                        <div className="text-center">
                            <span className="zi-spinner4 zif-spin zif-2x "></span>
                        </div>
                        <div className="text-center">
                            <span className="zi-spinner5 zif-spin-reverse zif-3x "></span>
                        </div>
                        <div className="text-center">
                            <span className="zi-spinner6 zif-spin zif-3x "></span>
                        </div>
                    </div>

                </section>

            </div>
        </section>
    );
}