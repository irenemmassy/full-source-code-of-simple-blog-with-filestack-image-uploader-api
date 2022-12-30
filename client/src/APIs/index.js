import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL;

// get all data from the server
export const getPosts = async ({ loading, blogs }) => {
  try {
    loading(true);
    const { data } = await axios.get(`${serverUrl}/`);
    if (data) {
      blogs(data);
      loading(false);
    }
    return data;
  } catch (error) {
    alert(error.msg);
  }
};

// get single data from the server
export const getSinglePost = async ({ id, loading, blog }) => {
  try {
    loading(true);
    const { data } = await axios.get(`${serverUrl}/${id}`);
    if (data) {
      blog(data);
      loading(false);
    }
    return data;
  } catch (error) {
    alert(error.msg);
  }
};

// post data to the server
export const postBlog = async ({ datas, loading }) => {
  try {
    loading(true);
    const { data } = await axios.post(`${serverUrl}/`, datas);
    if (data) {
      loading(false);
    }
    return data;
  } catch (error) {
    alert(error.msg);
  }
};
