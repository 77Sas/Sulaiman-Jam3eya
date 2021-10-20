import { observer } from 'mobx-react';
import { useState } from 'react';
import jam3eyatStore from '../stores/jam3eyatStore';
import Jam3eyatItem from './Jam3eyatItem';
import authStore from '../stores/authStore';
import AddModale from './AddModale';
function Jam3eyatList() {
	const [ isOpen, setIsOpen ] = useState(false);
	const closeModal = () => setIsOpen(false);
	const openModal = () => setIsOpen(true);
	const jam3eyat = jam3eyatStore.jam3eyat.map((jam3eya) => <Jam3eyatItem jam3eya={jam3eya} />);
	return (
		<section id="courses" class="course-area pt-140 pb-170 hero-area bg_cover">
			<div class="container">
				{authStore.user ? (
					<button onClick={openModal}>Add jam3eya</button>
				) : (
					<p>Sorry you dont have an account</p>
				)}
				<AddModale isOpen={isOpen} closeModal={closeModal} />

				<div class="row mb-30 mt-30">{jam3eyat}</div>
			</div>
		</section>
	);
}

export default observer(Jam3eyatList);
