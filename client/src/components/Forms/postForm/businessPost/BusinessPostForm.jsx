import { useState, useEffect } from "react";
import {
  createBusinessPostHandler,
  findCurrentBusinessByNameHandler,
} from "../../../../services/apiConfigBusiness";

export default function BusinessPostForm() {
  const [postData, setPostData] = useState({
    title: "",
    numberOfVolunteers: 0,
    eventDetails: "",
  });
  const [id, setId] = useState("");

  const businessName = localStorage.getItem("businessName");

  useEffect(() => {
    const fetchCurrentUser = async () => {
      let business = await findCurrentBusinessByNameHandler(businessName);
      console.log(businessName);
    };
    fetchCurrentUser();
  }, []);

  const setPostDataHandler = (e) => {
    const { id, value } = e.target;
    setPostData((prevPostData) => ({
      ...prevPostData,
      [id]: [value],
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const post = await createBusinessPostHandler(postData, id);
      console.log(post);
    } catch (error) {
      throw error;
    }
  };
  return (
    <div>
      <form>
        <label>Title of Event</label>
        <br />
        <input
          type="text"
          id="title"
          value={postData.title}
          placeholder="Name your event..."
          onChange={setPostDataHandler}
        />
        <br />
        <label>Volunteers Needed</label>
        <br />
        <input
          type="number"
          id="numberOfVolunteers"
          value={postData.numberOfVolunteers}
          placeholder="How many volunteers..."
          onChange={setPostDataHandler}
        />
        <br />
        <label>Event Details</label>
        <br />
        <input
          type="text"
          id="eventDetails"
          value={postData.eventDetails}
          placeholder="Description..."
          onChange={setPostDataHandler}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
