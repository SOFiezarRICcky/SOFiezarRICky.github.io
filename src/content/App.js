import React, {
    Component
} from 'react';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="header">
                    <div className="navbar">
                        <div className="logo">
                            <img className="imgfluid" src={require('../logo/babastudio-logo.png')} />
                        </div>
                        <div className="menu">
                            <ul>
                                <li><a>Home</a></li>
                                <li><a>Blogs</a></li>
                                <li><a>Galery</a></li>
                                <li><a>Kontak</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* End Header */}
                <div className="slider">
                    <div className="slidercontent">
                        <img className="imageslider" src={require('../images/banner-desktop.jpg')} />
                    </div>
                </div>
                {/* slider */}
                <h2 className="dataprestasi">Prestasi Murid babastudio</h2>
                <div className="content">

                    <div className="content-gambar">
                        <div className="image">
                            <img className="imagesliderr" src={require('../images/21cineplex.jpg')} />
                            <div className="contentimage">
                                <h2 className="fontimage">www.21cineplax</h2>
                            </div>
                        </div>
                        <div className="image">
                            <img className="imagesliderr" src={require('../images/bpn.jpg')} />
                            <div className="contentimage">
                                <h2 className="fontimage">www.bpn.go.id</h2>
                            </div>
                        </div>
                        <div className="image">
                            <img className="imagesliderr" src={require('../images/republika.jpg')} />
                            <div className="contentimage">
                                <h2 className="fontimage">www.replubika.co.id</h2>
                            </div>
                        </div>

                    </div>
                    {/* End Gambar */}
                    <div className="content-gambar">
                        <h2 className="dataprestasi">Tempat Kursus Babastudio</h2>
                        <div className="content-youtube">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/k1OWLK0Yhc8" frameborder="0" allow="accelerometer; autoplay; encrypted-media;gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </div>
                        <div className="content-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.02864611182!2d106.99308431436087!3d-6.259956963029233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698dd1d502ed43%3A0x556565c2411f873!2sBABASTUDIO%20(Bekasi)!5e0!3m2!1sid!2sid!4v1574149330136!5m2!1sid!2sid" width="550" height="300" frameborder="0" allowfullscreen=""></iframe>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default App;