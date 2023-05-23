import axios from "axios";

export async function AxiosGetAll(url, body) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function AxiosPost(url, body) {
  await axios.post(url, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

//todo falta probar el axios de delete y hacer el de edite
export async function axiosDelete(id) {
  await axios
    .post("https://zucaarqback.onrender.com/project/" + id)
    .then((response) => {
      console.log("objeto eliminardo");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
}
