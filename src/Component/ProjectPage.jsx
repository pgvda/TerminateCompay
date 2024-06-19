import {React, useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

import '../Css/ProjectPage.scss';
import { AgileImage, Ailogo, desktoplogo, mobilelogo, projectBanner, websitelogo } from "../Assets";

const ProjectPage = () =>{

    useEffect(() => {
        AOS.init();
      }, []);

    return(
        <div className="project_main_div">
            <div className="text_field_and_button" >
                <div className="btn_div" data-aos="fade-left">
                    <button className="btn">Contact</button>
                     <p className="btn_descreaption"> IF YOU WANT TO ANY KIND OF <br/> <span style={{color:'#ED7D31', fontSize:'40px', fontStyle:'italic', fontFamily:'Titillium Web:300,400,700'}}>TECHNICAL</span> <br/>SUPORT CONTACT US</p>
                </div>
            </div>
            <div className="project_banner_div">
                <img src={projectBanner}/>
            </div>

            <div className="about_project container">
                <div className="about_project_img_div" data-aos="fade-up">
                    <img src={AgileImage}/>
                </div>
                <div className="about_project_descreaption_div" data-aos="fade-up">
                    <p>AI tools like ChatGPT can be effectively used to brainstorm potential ideas and develop a research paper outline. However, we strongly advise against trying to pass AI-generated text off as your own work. ChatGPT outputs are not always original and may be detected by your university’s plagiarism checker or AI detector.</p>
                </div>
            </div>

            <div className="project_technologies">

                <div className="technology_div" data-aos="fade-right">
                    <div className="technology_div_img_div">
                        <img className="technology_div_img" src={mobilelogo}/>
                    </div>
                    <div className="technology_div_discreaption_div">
                        Web Site
                    </div>
                </div>

                <div className="technology_div" data-aos="fade-right">
                    <div className="technology_div_img_div">
                        <img className="technology_div_img" src={mobilelogo}/>
                    </div>
                    <div className="technology_div_discreaption_div">
                        Web Site
                    </div>
                </div>

                <div className="technology_div" data-aos="fade-left">
                    <div className="technology_div_img_div">
                        <img className="technology_div_img" src={mobilelogo}/>
                    </div>
                    <div className="technology_div_discreaption_div">
                        Web Site
                    </div>
                </div>

                <div className="technology_div" data-aos="fade-left">
                    <div className="technology_div_img_div">
                        <img className="technology_div_img" src={mobilelogo}/>
                    </div>
                    <div className="technology_div_discreaption_div">
                        Web Site
                    </div>
                </div>
            </div>

            <div className="project_section">
                project section
            </div>
        </div>
    )
}

export default ProjectPage;
