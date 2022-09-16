import axios from "axios";

const fetch = () => {
    return axios.get("https://worldtimeapi.org/api/timezone/Asia/Seoul")
}

export default {
    fetch
}
