import { useState, useEffect} from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import headerImg from "../assets/img/outer-space.svg"
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css'
import './Banner.css'
import TrackVisibility from 'react-on-screen'

export const Banner = () => {
  /// 轮播功能
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [index, setIndex] = useState(1)
  const toRotate = [ "Web Developer", "Welcome !" ]
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => { clearInterval(ticker) }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
 
    setText(updatedText)

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIndex(prevIndex => prevIndex - 1)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setIndex(1)
      setDelta(500)
    } else {
      setIndex(prevIndex => prevIndex + 1)
    }
  }

  /// 邮件发送逻辑
  const handleSubmit = (e) => {
    // 清空输入框
    
    // 弹窗：成功或失败
    
  }

  return (
    <section className="banner" id="home">{/* NOTE section相较于div更有可读性 */}
      <Container>
        <Col xs={12} md={6} xl={7}>
          <div className="groundGlass-panel">
          <Row className="introduction-text">
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h1>{`Hi! I'm Alla, `} <span className="txt-rotate" data-rotate='[ "Web Developer !", "Welcome !" ]'><span className="wrap">{text}</span></span></h1>
            </div>}
          </TrackVisibility>
          </Row>
          <Row>
          <Form role="form" action="myEmail">
            <div className="form-group">
              <input type="text" className="form-control form-basicInfo" placeholder="名字"></input>
              <input type="text" className="form-control form-basicInfo" placeholder="如何称呼"></input>
              <input type="email" className="form-control form-address" placeholder="联系方式（邮箱）"></input><br/>
              <input type="text" className="form-control form-email-title" placeholder="邮件标题"></input><br/>
              <input type="text" className="form-control form-email-content" placeholder="邮件内容"></input>
              <button className="form-btn">Email me.</button>
            </div>
          </Form>
          </Row>
          </div>
        </Col>
        <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <img src={headerImg} alt="Header Img" className="banner-dynamic-item" style={{}}/>
              </div>}
          </TrackVisibility>
        </Col>
      </Container>
    </section>
  )
}
