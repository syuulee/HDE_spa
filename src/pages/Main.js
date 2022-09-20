import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import '../css/Main.scss';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { useRef, useState } from 'react';

const SLIDE = [
    { id: 1, title: "The world expands along the new path created", content: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", link: "/sub01" },
    { id: 2, title: "The world expands along the new path created", content: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", link: "/sub01" },
    { id: 3, title: "The world expands along the new path created", content: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", link: "/sub01" },
]

const Main = () => {
    const [num, setNum] = useState();
    const MSG = useRef(null);
    return (
        <section className='Main'>
            <div className="mainVisual">
                <Swiper
                    loop={true}
                    //slideActiveClass='on' 리액트에서는 사용할 수 없음(지원x)
                    onSlideChange={it => { setNum(it.realIndex); console.log(it) }}
                    className='mainSlider'
                    ref={MSG}
                >
                    {
                        SLIDE.map((slide, idx) => {
                            return (
                                <SwiperSlide className={`itm itm0${slide.id} ${num === idx ? 'on' : ''}`} key={slide.id}>
                                    <div className="content">
                                        <p>{slide.title}</p>
                                        <div className="des">
                                            {slide.content}
                                        </div>
                                        <Link to={slide.link}>
                                            자세히보기
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <ul className="dots">
                {
                    SLIDE.map((dot, idx) => <li className={num === idx ? 'on' : ''}>{dot.id}</li>)
                }
            </ul>
            <div className="tab">
                {SLIDE[num]?.title}
            </div>
            <div className="slideNum">
                0{num + 1} / 0{SLIDE.length}
            </div>
            {console.log(MSG.current)}
            <button onClick={() => MSG.current.swiper.slidePrev()}>뒤로가기</button>
            <button onClick={() => MSG.current.swiper.slideNext()}>앞으로가기</button>
        </section >
    )
}

export default Main;