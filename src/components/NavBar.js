import { useEffect, useState } from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Tooltip } from "react-tooltip" 
import githubIcon from '../assets/img/github-icon.png'
import './NavBar.css'

export let NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false) // setScrolled是setter
    useEffect(()=>{
        const onScroll = () => {
            if(window.scrollY>50){
                setScrolled(true)
            } else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll",onScroll)
        
        return () => window.removeEventListener("scroll",onScroll) 
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    
    return (
        // <>
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Navbar.Brand href="#home" className="navbar-item">
                BLOG
            </Navbar.Brand>
            <Nav classname="nav-link-group">
                <Nav.Link href="#home" className={activeLink==='home' ? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>
                    <span className="left-navbar-item">主页</span>
                </Nav.Link>
                <Nav.Link href="#knowledge" className={activeLink==='knowledge' ? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('knowledge')}>
                    <span className="left-navbar-item">知识</span>
                </Nav.Link>
                <Nav.Link href="#project" className={activeLink==='projects' ? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>
                    <span className="left-navbar-item">项目</span>
                </Nav.Link>
            </Nav>
            <span className="navbar-contact">
                <div className="social-icon">
                    <a href="https://github.com/Achenganggyel?tab=repositories">
                        <img src={githubIcon} alt="github" style={{width:'100%'}} 
                            data-tooltip-id="My-GitHub" data-tooltip-content="My GitHub" data-tooltip-place={"bottom"} 
                        />
                        <Tooltip id="My-GitHub"></Tooltip>
                    </a>
                </div>
            </span>
        </Navbar>
        // </>
    )
}