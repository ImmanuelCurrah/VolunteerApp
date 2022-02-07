import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { Row, Form } from "react-bootstrap";
import {
  fetchComment,
  findCurrentBusinessByIdHandler,
  postCommentHandler,
} from "../../services/apiConfigBusiness";

export default function Comments() {
  const [postComments, setPostComments] = useState({});
  const [businessInQuestion, setBusinessInQuestion] = useState({});
  const [inputData, setInputData] = useState({ message: "" });
  const { businessId, postId } = useParams();

  const user = localStorage.getItem("userToken");
  const business = localStorage.getItem("businessToken");
  let token;
  if (user) {
    token = user;
  } else {
    token = business;
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = await postCommentHandler(
      token,
      inputData,
      businessId,
      postId
    );
    console.log(newPost);
  };

  useEffect(() => {
    const fetchingData = async () => {
      const comment = await fetchComment(token, businessId, postId);
      const currentBusiness = await findCurrentBusinessByIdHandler(businessId);
      setBusinessInQuestion(currentBusiness.data.data.user);
      setPostComments(comment.data.data);
    };
    fetchingData();
  }, [submitHandler]);

  const setData = (e) => {
    const { id, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  if (!postComments.Comments) {
    return "Loading...";
  }

  return (
    <Layout>
      <div className="login-page">
        <div className="all-posts-container">
          <div className="allposts-headers">
            <h2>comments going here boiii</h2>
            <div className="card text-center shadow all-posts-card">
              <div className="overflow">
                <div className="card-body text-dark"></div>
                <h2>{`Hosted By: ${businessInQuestion.businessName}`}</h2>
                <h3>{postComments.event}</h3>
                <h4>{`Volunteers Needed: ${postComments.numberNeeded}`}</h4>
                <h4>{postComments.content}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="all-posts-container">
          <h3>Comments:</h3>
          {postComments.Comments.length === 0 ? (
            <h4>No Comments yet</h4>
          ) : (
            postComments.Comments.map((comment) => {
              return <h4 key={comment._id}>{comment.message}</h4>;
            })
          )}
          <Row>
            <Form onSubmit={submitHandler}>
              <Form.Control
                required
                autoFocus
                id="message"
                type="text"
                placeholder="add a comment..."
                value={inputData.message}
                onChange={setData}
              />
              <button>Reply</button>
            </Form>
          </Row>
        </div>
      </div>
    </Layout>
  );
}
