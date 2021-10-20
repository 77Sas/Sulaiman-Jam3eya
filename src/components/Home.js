import React from 'react';
import authStore from '../stores/authStore';
import { observer } from 'mobx-react';

function Home() {
	return (
		<div>
			<h1>Welcome to Jam3ey here where you can join or create your own jam3eya</h1>
			<p className="welcome">{authStore.user ? 'Welcome!  ' + authStore.user.username : 'no-user'}</p>
		</div>
	);
}

export default observer(Home);
