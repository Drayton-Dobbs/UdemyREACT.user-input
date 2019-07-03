import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4c8c7a78724af3bd6b127c3b2f84c3a737aa379619360a4229d72311c624bd66'
    }
});