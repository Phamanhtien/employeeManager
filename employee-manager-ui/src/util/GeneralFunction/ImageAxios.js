import axios from "axios";

export default function getImageWithMediaType(imageName) {
    return axios
        .get("http://localhost:8080/images/")
        .then((res) => res.data)
        .catch((error) => console.error(error));
}