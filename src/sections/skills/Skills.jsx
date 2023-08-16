import data from './data';
import './skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Minhas Habilidades</h2>
      <p>Habilidades que possuo até o momento</p>
      <div className="container skills__container">
        {data.map((item) => (
          <div key={item.id} className="card skills light">
            <div className="skills__icon">{item.icon}</div>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
