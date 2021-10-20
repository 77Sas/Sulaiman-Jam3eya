import { makeAutoObservable } from 'mobx';
import api from './api';

class Jam3eyatStore {
	jam3eyat = [];

	constructor() {
		makeAutoObservable(this, {});
	}

	createjam3eya = async (jam3eya) => {
		try {
			const res = await api.post('/jam3ya', jam3eya);
			this.jam3eyat.push(res.data);
		} catch (error) {
			console.log('jam3eyatStore -> createjam3eya -> error', error);
		}
	};

	fetchjam3eyat = async () => {
		try {
			const response = await api.get('/jam3ya');
			this.jam3eyat = response.data;
		} catch (error) {
			console.error('jam3eyatStore -> fetchjam3eyat -> error', error);
		}
	};
}
const jam3eyatStore = new Jam3eyatStore();
jam3eyatStore.fetchjam3eyat();
export default jam3eyatStore;
