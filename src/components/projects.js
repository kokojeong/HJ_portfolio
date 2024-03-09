import React from "react";
import { Link } from "react-router-dom";
import { Element } from 'react-scroll';


import "./assets/css/projects.css";

export default function Projects(){
  return(
    <Element name="projects" className="element">
      <article className="projects_content">
        <div className="projects_title">PROJECTS</div>
        <div className="projects_main">
          <div className="projects_box01">
            <a href="https://gilded-muffin-316c89.netlify.app/" target="_blank">
              <div>[개인 프로젝트]
                <p>HTML, CSS, JS로 구현한 스타벅스 리뉴얼페이지</p>
              </div>
            </a>
          </div>

          <div className="projects_box02">
            <a href="https://taupe-treacle-49be79.netlify.app/" target="_blank">
              <div>[팀 프로젝트]
                <p>이태리 패밀리레스토랑 웹 구현 팀프로젝트</p>
              </div>
            </a>
          </div>

          <div className="projects_box03">
            <a href="https://taupe-treacle-49be79.netlify.app/" target="_blank">
              <div>[팀 프로젝트]
                <p>자급제 핸드폰 판매 웹 키오스크 팀프로젝트</p>
              </div>
            </a>
          </div>

        </div>
      </article>
    </Element>
  )
}