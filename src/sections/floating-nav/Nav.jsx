
const Nav = ({className, item}) => {
  return (
    <li className={className}>
        <a href={item.link}>{item.icon}</a>
        <p>{item.desc}</p>
    </li>
  )
}

export default Nav