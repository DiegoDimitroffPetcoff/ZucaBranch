import axios from "axios";

//Function to get all the content
export async function AxiosGetAll(url, body) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//function to post
export async function AxiosPost(url, body) {
  try {
    let result = await axios.post(url, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
   window.location.href = "../projectlist";
  } catch (error) {
    console.log("HA SUCEDIDO UN ERROR:" + error);
  }
}

export async function AxiosSearchById(url, id) {
  try {
    let response = await axios.get(url + id);
    return response;
  } catch (error) {
    return error;
  }
}

export async function AxiosDelete(url, id) {
  try {
    console.log(id);
    let response = await axios.delete(url + id);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function AxiosEdite(url, id, data) {
  try {
    let response = await axios.patch(url + id, data);

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
