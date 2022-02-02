import BusinessPostForm from "../Forms/postForm/businessPost/BusinessPostForm"
import { LoggedInLayout } from "../Layout/LoggedInLayout";
// post handler?


export default function Card() {

  const [businessPost, setBusinessPost] = useState();
  const token = localStorage.getItem("token");


  return (
    <LoggedInLayout>
      <div>

      </div>
    </LoggedInLayout>
  )
}
