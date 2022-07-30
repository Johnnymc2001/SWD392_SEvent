import axiosClient from "../axios";

const eventApi = {
    getAll: (data) => {
        const url = "events";
        return axiosClient.get(url);
    }
}

export default eventApi;