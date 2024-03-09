import "./assets/css/skills.css"
import { Element } from 'react-scroll';
import Css from '../components/assets/img/Css.png'
import HTML from '../components/assets/img/HTML.png'
import Javascript from '../components/assets/img/Javascript.png'
import Reactimage from '../components/assets/img/React.png'
import Nodejs from '../components/assets/img/Nodejs.png'
import Mysql from '../components/assets/img/Mysql.png'
import Illustrator from '../components/assets/img/Illustrator.png'
import Photoshop from '../components/assets/img/Photoshop.png'
import Github from '../components/assets/img/Github.png'
import React, {useState} from 'react';


export default function Skills(){

  const [selectedSkillInfo, setSelectedSkillInfo] = useState('');
  const handleSkillClick = (skillInfo) => {
    setSelectedSkillInfo(skillInfo);
  }

  return(
    <Element name="skills" className="element">
      <article className="skills_content">
        <div className="skills_title">SKILLS</div>
        <div className="skills_item">
          <div className="skillLeft">
            <img src={Photoshop} alt="Photoshop" onClick={() => handleSkillClick('어렸을 적 Photoshop에 흥미를 느끼고 있었으며 전문적으로 배우지 않았지만, 혼자만의의 방식으로 누끼따기, 이미지 보정 등 해보았으며 현재는 학습하여 더 나아가 이미지 편집, 배너 제작, 레이어작업, 등 다양한 작업을 수행할 수 있습니다.')}>
            </img>

            <img src={Illustrator} alt="Illustrator" onClick={() => handleSkillClick('학습을 통하여 여러 아이콘을 만들어 본 적이 있습니다. 나아가 배운 것을 토대로 로고를 제작해 본 적이 있습니다. 창의적인 디자인 프로젝트를 수행하고자 합니다.')}>
            </img>
            
            <img src={HTML} alt="HTML" onClick={() => handleSkillClick('HTML 스킬을 키우며 웹페이지 구조와 콘텐츠 마크업에 자신감을 얻었습니다. 시맨틱 HTML 태그와 웹 표준 준수를 중요시하며 일관된 렌더링을 보장합니다. 최신 웹 개발 트렌드를 따라가며, 팀 프로젝트에서 협업을 통해 웹 개발에 기여하고 있습니다.')}>
            </img>

            <img src={Css} alt="Css" onClick={() => handleSkillClick('CSS 스킬을 통해 웹 디자인 분야에서 경험을 쌓아왔습니다. 시각적 디자인과 스타일을 다루며, 사용자 경험을 개선하는 데 주력하고 있습니다. 웹 표준을 준수하고 시맨틱 HTML과 함께 사용하여 웹 페이지를 구축하며, 반응형 웹 디자인과 크로스 브라우징을 고려하여 웹 콘텐츠를 최적화합니다. 디자인과 스타일링을 통해 웹 페이지를 더 멋지고 사용자 친화적으로 만들기 위해 노력합니다.')}>
            </img>

            <img src={Javascript} alt="Javascript" onClick={() => handleSkillClick('JavaScript를 지금보다 더 다양한 지식을 습득하기 위해 열심히 학습하고 있습니다. 기본부터 시작해 비동기 프로그래밍, 이벤트 처리, DOM 조작, 그리고 모던 자바스크립트 프레임워크 및 라이브러리를 활용하는 방법까지 공부하며 성장하고 있습니다.')}>
            </img>

            <img src={Reactimage} alt="Reactimage" onClick={() => handleSkillClick('React 스킬을 보유하고 있으며, React를 사용하여 동적이고 효과적인 사용자 인터페이스(UI)를 개발하는 데 경험이 있습니다. 컴포넌트 기반 아키텍처를 활용하여 UI를 구성하고, React의 가상 DOM을 활용하여 성능 최적화에 기여하고 있습니다. React를 활용하여 다양한 웹 애플리케이션을 개발하고, 상태 관리 및 컴포넌트 간 데이터 흐름을 효과적으로 다루며, 웹 애플리케이션의 사용자 경험을 개선하기 위해 노력하고 있습니다.')}>
            </img>

            <img src={Nodejs} alt="Nodejs" onClick={() => handleSkillClick('Nodes에 대해선 아직 많은 이해가 없습니다. 기본적인 개념은 알고 있지만 깊이 있는 경험이나 전문지식은 부족합니다. 이제 막 시작의 한 단계로 앞으로 더 공부하고 실무에서 적용해 보며 전문성을 향상시킬 계획입니다.')}>
            </img>
          
            <img src={Mysql} alt="Mysql" onClick={() => handleSkillClick('MySQL과 관련된 실제 설정, 쿼리작성, 데이터베이스설계 등에 대해 경험해 본 적이 있습니다. 기본적인 지식은 가지고 있으나, 고급 기능이나 최적화에 대한 이해를 앞으로 더 공부하고 연습하여 더 나은 이해와 능력을 갖추고자 합니다.')}>
            </img>

            <img src={Github} alt="Github" onClick={() => handleSkillClick('GitHub는 코드 버전 관리와 협업을 위한 도구로 개념은 이해하고 있지만 실제로 사용한 경험이 제한적입니다. 고급 기능과 협업 플로우에 대한 깊이 있는 지식은 부족합니다. 그러나 배우고 습득하려는 열정과 의지가 있으며 오픈소스 프로젝트에 참여하고 기존 프로젝트에 기여하는 데 관심이 있습니다 이 도구를 통해 개발 커뮤니티와 연결되어 함께 성장하고 싶습니다.')}>
            </img>
          </div>
        </div>
        <div className="infoBox">
          {selectedSkillInfo}
        </div>
      </article>
    </Element>
  )
}