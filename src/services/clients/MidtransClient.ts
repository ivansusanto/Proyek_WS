import axios from "axios";

const MIDTRANS_TOKEN = process.env.MIDTRANS_TOKEN;

const MidtransClient = axios.create({
    baseURL: "midtrans",
    headers: {
        token: MIDTRANS_TOKEN,
    },
});

export default MidtransClient;