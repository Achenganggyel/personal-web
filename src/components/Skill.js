import { useState, useEffect} from "react"
import './Skill.css'
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import Carousel from 'react-multi-carousel' // 支持轮播
import 'react-multi-carousel/lib/styles.css'

export const Skill = () => {
    // 适配不同设备的响应式布局
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 }, // 超大断点为3000-4000
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    const skill_content = [
        {name:'前端开发', meter: meter1},
        {name:'后端开发', meter: meter2},
        {name:'数据分析', meter: meter3},
        {name:'数据库', meter: meter1}
    ]
    return(
        <section className="skill">
            <div className="skill-title">
                SKILLS
            </div>
            <div className="skill-introduction">
                前端开发者，后端学习中
                <br/>
                A frontend developer, who is studying backend development. 
            </div>
            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skill_content.map((item, index) => {
                    return <div className="item">
                    <img src={item.meter} alt="Image" />
                    <h5>{item.name}</h5>
                    </div>
                })}
            </Carousel>
        </section>
    )
}