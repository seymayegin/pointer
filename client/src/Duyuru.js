import React, {useState} from 'react';
import Slider from "react-slick";
import CardBox from "./CardBox";


const options = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    marginRight: 10,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
            }
        }, {
            breakpoint: 850,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
};

const varsayilan = [{baslik:"baslık 1",metin:"icerik 1"},{baslik:"baslık 2",metin:"icerik 2"},{baslik:"baslık 3",metin:"icerik 3"},{baslik:"baslık 4",metin:"icerik 4"}];
export default function Duyuru() {

    console.log('Duyuru');

    const [duyurular,] = useState(varsayilan);

    const duyuruItem = duyuru => {
        return (
            <div className="slick-slide-item">
                <div className="brand-logo mt-0" style={{paddingBottom:'135px'}}>
                    <h5 className="mt-2">{duyuru.baslik}</h5>
                    <p>{duyuru.metin}</p>
                </div>
            </div>
        );
    };

    return (
            <div className="row" style={{marginTop:'-22px'}}>
                <CardBox styleName="col-lg-12" cardStyle="text-center pb-0 pt-0" heading="Duyurular & Haberler"
                         headingStyle="m-0 p-0 pt-2 pb-2" childrenStyle="m-0 p-0 pb-1">
                    <Slider className="slick-app-frame pb-0" {...options}>
                        {duyurular.map(duyuru => duyuruItem(duyuru))}
                    </Slider>
                </CardBox>
            </div>
    );

}
