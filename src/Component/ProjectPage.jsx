import React from "react";

import '../Css/ProjectPage.scss';
import { projectBanner } from "../Assets";

const ProjectPage = () =>{
    return(
        <div className="project_main_div">
            <div className="text_field_and_button">
                <div className="btn_div">
                    <button className="btn">Contact</button>
                </div>
            </div>
            <div className="project_banner_div">
                <img src={projectBanner}/>
            </div>

            <div className="about_project">
                about our project
            </div>

            <div className="project_technologies">
                technologies
            </div>

            <div className="project_section">
                project section
            </div>
        </div>
    )
}

export default ProjectPage;
