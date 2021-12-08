import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID KCDwMb0w8eriBZtbIBIyi1C9Cg_XlsbL_kEkf_ypCro'

    }   
});