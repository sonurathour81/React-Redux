import axios from 'axios';

export const baseURL = 'https://api.unsplash.com';

export default axios.create({
    headers:{
        Authorization:
        'Client-ID afd3d62221572b6588cd1d56b88491830bea763d56ea247fae2a1f7d8c61bbbf'
    }
})