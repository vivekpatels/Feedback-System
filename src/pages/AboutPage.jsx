import Card from "../components/shared/Card"
import { Link } from "react-router-dom"
function AboutPage() {
  return (
    <Card>
        <h2>This is About Page</h2>
        <p>This is a project about Feedback for a product or service</p>
        <Link to='/'> Back to Home</Link>
    </Card>
  )
}

export default AboutPage