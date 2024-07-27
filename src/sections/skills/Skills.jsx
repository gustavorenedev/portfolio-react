import { useState } from "react";
import data from "./data";
import "./skills.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Skills = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [animate, setAnimate] = useState("");

  const itemsPerPage = 6;

  const nextSkills = () => {
    if (startIndex + itemsPerPage < data.length) {
      setAnimate("slide-out-left");
      setTimeout(() => {
        setStartIndex(startIndex + itemsPerPage);
        setAnimate("slide-in-right");
      }, 300);
    }
  };

  const prevSkills = () => {
    if (startIndex - itemsPerPage >= 0) {
      setAnimate("slide-out-right");
      setTimeout(() => {
        setStartIndex(startIndex - itemsPerPage);
        setAnimate("slide-in-left");
      }, 300);
    }
  };

  return (
    <section id="skills">
      <h2>Minhas Habilidades</h2>
      <p>Habilidades que estudo e prático até o momento</p>
      <div className="buttons__container">
        {startIndex > 0 && (
          <div className="button_left">
            <FaChevronLeft onClick={prevSkills} />
          </div>
        )}
        <div className={`container skills__container ${animate}`}>
          {data.slice(startIndex, startIndex + itemsPerPage).map((item) => (
            <div key={item.id} className="card skills light">
              <div className="skills__icon">{item.icon}</div>
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
        {startIndex + itemsPerPage < data.length && (
          <div className="button_right">
            <FaChevronRight onClick={nextSkills} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
