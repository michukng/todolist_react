const Footer = ({ tasks }) => {
  return (
    <footer>
      <p>{tasks.length} {tasks.length === 1 ? "TASK" : "TASKS"} TO DO</p>
    </footer>
  )
}

export default Footer
