const Techstack = ({ technologies }) => {
  return (
    <div className="techstack-box">
      {technologies.map((tech, id) => {
        const { icon } = tech
        return (
          <div className="tech-cards" key={id}>
            {icon}
          </div>
        )
      })}
    </div>
  )
}
export default Techstack
