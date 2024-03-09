import "./assets/css/about.css"
import { Element } from 'react-scroll';

export default function About(){
  return(
    <Element name="about" className="element">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"/>
      <article className="about_content">
      <div className="about_title">ABOUT ME</div>
      <div className="about_box">
        <div className="about_info">
          <div className="about_icon xi-user xi-4x"></div>
          <div className="about_field">
            <div className="about_field_title">
              <div className="about_field_label text">이름</div>
              <div className="about_field_value text">안혜정</div>
            </div>
          </div>
        </div>

        <div className="about_info">
          <div className="about_icon xi-calendar xi-4x"></div>
          <div className="about_field">
            <div className="about_field_title">
              <div className="about_field_label text">생년월일</div>
              <div className="about_field_value text">92.04.13</div>
            </div>
          </div>
        </div>

        <div className="about_info">
          <div className="about_icon xi-maker xi-4x"></div>
          <div className="about_field">
            <div className="about_field_title">
              <div className="about_field_label text">주소지</div>
              <div className="about_field_value text">경기도 안산시</div>
            </div>
          </div>
        </div>

        <div className="about_info">
          <div className="about_icon xi-call xi-4x"></div>
          <div className="about_field">
            <div className="about_field_title">
              <div className="about_field_label text">연락처</div>
              <div className="about_field_value text">010-5644-4544</div>
            </div>
          </div>
        </div>
        
        <div className="about_info">
          <div className="about_icon xi-mail xi-4x"></div>
          <div className="about_field">
            <div className="about_field_title">
              <div className="about_field_label text">이메일</div>
              <div className="about_field_value text">ahnhj413@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      </article>
    </Element>
  )
}