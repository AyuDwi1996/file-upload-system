import axios from "axios";

export default axios.create(
    {
        baseURL:"https://react-app-30b09-default-rtdb.firebaseio.com/"
    }
)