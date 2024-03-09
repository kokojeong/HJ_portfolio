import { Link, animateScroll as scroll } from 'react-scroll';
import React, { useState, useEffect } from 'react';
import "../components/assets/css/main.css";

export default function Main() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [blogTitle, setBlogTitle] = useState('');
  const [count, setCount] = useState(0);
  const completionWord = 'Hye Jeong Portfolio';
  // const completionWord = 'Ahn Hye Jeong Portfolio';
  // const completionWord = 'Hello Welcome To My Portfolio';

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 50);
    setScrolled(offset > 200);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    scroll.scrollTo(id, {
      smooth: true,
      offset: -50,
    });
  };

  const handleNavClick = (id, e) => {
    e.preventDefault(); // 기본 동작 방지
    const currentOffset = window.scrollY;
    const targetOffset = document.getElementById(id).offsetTop -50;
  
    if (currentOffset !== targetOffset) {
      scrollTo(id);
    } else {
      handleTopButtonClick();
    }
  };

  const handleTopButtonClick = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  };

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        if (count >= completionWord.length) {
          clearInterval(typingInterval); // 현재의 타이핑을 멈춤

          setTimeout(() => {
            // 3초 후에 다시 타이핑을 시작
            const newTypingInterval = setInterval(() => {
              setBlogTitle((newPrevTitleValue) => {
                if (count >= completionWord.length) {
                  clearInterval(newTypingInterval); // 새로운 타이핑을 멈춤
                  setCount(0); // 초기화하여 반복 실행 가능하게 변경
                  return '';
                }

                let result = newPrevTitleValue + completionWord[count];
                setCount(count + 1);

                return result;
              });
            }, 200);
          }, 2000);

          return prevTitleValue; // 현재의 글자를 유지
        }

        let result = prevTitleValue + completionWord[count];
        setCount(count + 1);

        return result;
      });
    }, 200);

    return () => {
      clearInterval(typingInterval);
    };
  }, [count, completionWord]);



  return (
    <>
      <header id="main_header" className={isScrolled ? 'scrolled' : ''}>
        <div className="header_box">
          <div className="header_logo">
            <Link to="sbg" spy={true} smooth={true} onClick={(e) => handleTopButtonClick('about', e)}>
              AHJ
            </Link>
          </div>
          <div className="header_list">
            <ul className="header_ul">
              <li>
                <Link to="about" spy={true} smooth={true} onClick={(e) => handleNavClick}>
                  ABOUT ME
                </Link>
              </li>
              <li>
                <Link to="skills" spy={true} smooth={true} onClick={(e) => handleNavClick}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="projects" spy={true} smooth={true} onClick={(e) => handleNavClick}>
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="main_content">
          <h1 className="main-title">{blogTitle}</h1>
        </div>
      </header>
      <div id="top_btn" onClick={handleTopButtonClick} className={scrolled ? "visible" : ""}>
        <a href="#">
          <p>TOP</p>
        </a>
      </div>
    </>
  );
}
