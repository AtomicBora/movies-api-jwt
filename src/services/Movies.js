import baseService from './base.service';

class Movies{
    async add(movie){
        await baseService.post('add', movie);
    }
    async getAll(){
        const response = await baseService.get('/movies');
        return response.data;
    }
}

export default new Movies();