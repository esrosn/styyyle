import React, {Component} from 'react'

import './content.css'
import data from '../../data'
import Layout from '../layout'
import Navbar from '../Navbar'
import About from './About'
import Projects from './Projects'

class Content extends Component {
    state = { 
        projects: data,
        active: 'All',
     }
     

     filterProjects = (category) => {
        if(!category) {
            
            return this.setState({
                projects: data,
                active: 'All'
            })

        } 

        let projects = data.filter(project => project.category.type === category)
        this.setState({
            projects,
            active: category
        })
     }

    render() {
    return (
        <>
        <Navbar {...this.state} filterProjects={this.filterProjects}/>
        <Layout>
            <About />
            <Projects projects={this.state.projects} />
        </Layout>
        </>
     );
    }
}
 
export default Content;
