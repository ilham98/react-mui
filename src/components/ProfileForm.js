import Grid from "@mui/material/Grid";
import { useState } from "react";
import axios from "axios";

function ProfileForm() {
  const [name, setName] = useState("");
  const [cities, setCities] = useState(["Jakarta", "Bekasi"]);

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onSubmitClick = async (event) => {
    // event.preventDefault();
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = data;
    for (let x = 0; x < posts.length; x++) {
      const id = posts[x].id;
      const postResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log(postResponse.data);
    }
  };

  return (
    <form>
      <Grid item xs={6}>
        <div>
          <input onChange={(event) => onNameChange(event)} />
          <button type="button" onClick={onSubmitClick}>
            Submit
          </button>
          <div>
            <ul>
              {cities.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>
        </div>
      </Grid>
    </form>
  );
}

export default ProfileForm;
