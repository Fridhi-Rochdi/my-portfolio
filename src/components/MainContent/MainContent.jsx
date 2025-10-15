import React from 'react';
import './MainContent.css';

const skills = [
  { name: "JavaScript", icon: "fa-brands fa-js", color: "#f7df1e" },
  { name: "C/C++", icon: "fa-solid fa-code", color: "#00599c" },
  { name: "Python", icon: "fa-brands fa-python", color: "#3776ab" },
  { name: "Java", icon: "fa-brands fa-java", color: "#f89820" },
  { name: "Node.js", icon: "fa-brands fa-node-js", color: "#68a063" },
  { name: "React", icon: "fa-brands fa-react", color: "#61dafb" },
  { name: "HTML", icon: "fa-brands fa-html5", color: "#e34f26" },
  { name: "CSS", icon: "fa-brands fa-css3-alt", color: "#1572b6" },
  { name: "MongoDB", icon: "fa-solid fa-leaf", color: "#47a248" },
  { name: "Firebase", icon: "fa-solid fa-fire", color: "#ffca28" },
  { name: "MySQL", icon: "fa-solid fa-database", color: "#4479a1" },
  { name: "SpringBoot", icon: "fa-solid fa-leaf", color: "#6db33f" },
  { name: "Angular", icon: "fa-brands fa-angular", color: "#dd0031" },
  { name: "TypeScript", icon: "fa-brands fa-js", color: "#3178c6" },
  
  // Machine Learning Tools
  { name: "TensorFlow", icon: "fa-brands fa-tensor", color: "#ff6f00" },
  { name: "Keras", icon: "fa-brands fa-square", color: "#d32f2f" },
  { name: "PyTorch", icon: "fa-brands fa-firefox", color: "#ee4c2c" },
  { name: "Scikit-learn", icon: "fa-solid fa-cogs", color: "#f7b731" },
  { name: "Pandas", icon: "fa-brands fa-pandas", color: "#150458" },
  { name: "NumPy", icon: "fa-solid fa-square-root-alt", color: "#2a64c6" },
  
  // Competitive Programming Tools
  { name: "C++ STL", icon: "fa-solid fa-cogs", color: "#6a5acd" },
  { name: "GCC", icon: "fa-solid fa-cogs", color: "#3b454d" },
  { name: "Codeforces", icon: "fa-solid fa-trophy", color: "#0057ff" },
  { name: "LeetCode", icon: "fa-solid fa-code", color: "#f8b81c" },
 
  { name: "Jupyter", icon: "fa-solid fa-laptop-code", color: "#f37626" },
];

const tools = [
  { name: "VS Code", icon: "fa-solid fa-code", color: "#007acc" },
  { name: "Postman", icon: "fa-solid fa-flask", color: "#ef5b25" },
  { name: "Git", icon: "fa-brands fa-git-alt", color: "#f1502f" },
  { name: "Visual Studio", icon: "fa-solid fa-code", color: "#5c2d91" },
  { name: "GitHub", icon: "fa-brands fa-github", color: "#181717" },
  { name: "Android Studio", icon: "fa-brands fa-android", color: "#3ddc84" },
  
 
];

const MainContent = () => {
  return (
    <div className='MainContent'>
      <h1 className='prof-title'>Professional Skillset</h1>
      <div className="skillset">
        {skills.map((skill, index) => (
          <div key={index} className="skills" >
            <i className={skill.icon} style={{ color: skill.color }}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

      <h1 className='tools-prof'>Tools I use</h1>
      <div className="tools">
        {tools.map((tool, index) => (
          <div key={index} className="tools-item" >
            <i className={tool.icon} style={{ color: tool.color }}></i>
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
