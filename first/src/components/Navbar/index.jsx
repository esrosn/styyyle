import React, { Component } from 'react';
import { Link } from "gatsby"

import './navbar.css'

import data from '../../data'
import categories from '../../data/categories'

class Navbar extends Component {
    state = {  
        scrolled: false,
    }
    
    
    
    handleScroll = () => {
        console.log(window.pageYOffset)
    // if (window.pageYOffset >= 767) {
    //     this.setState({
    //         scrolled: true
    //     })
    // } 
        window.pageYOffset >= 767 ? this.setState({scrolled: true}) : this.setState({scrolled: false})
      
    }

    componentDidMount() {
       
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        
        window.removeEventListener('scroll', this.handleScroll)

    }

    
    render() { 
        const {active, projects} = this.props
       
        return (  
            <nav className={`ph4 navbar flex flex-row justify-center items-center ${this.state.scrolled ? 'show' : null}`}>
                <ul className="title ph4 ma0 w-25"><h2>Style</h2></ul>
                <ul className="ph4 ma0 w-100 w-75-m flex flex-row justify-end">
                <li className="ml4">
                       <p className={active === 'All' ? 'active' : null}onClick={() => this.props.filterProjects() }>
                   All
                   </p>
                </li>
                {categories.map((category, idx) => (

                   <li className="ml4" key={idx}>
                       <p className={active === category ? 'active' : null } onClick={() => this.props.filterProjects(category) }>
                   {category}
                   </p>
                   </li>
                ))}
                </ul>
            </nav>
        );
    }
}
 
export default Navbar;