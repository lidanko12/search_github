import React, { useState, useEffect } from 'react';

import { useSpring, animated } from 'react-spring'

export default function MainPage() {
	const [isLoading, setIsLoading] = useState(true);

	const styles = useSpring({
		loop: true,
		to: [
			{ opacity: 1, color: '#ffaaee' },
			{ opacity: 0, color: 'rgb(14,26,19)' },
		],
		from: { opacity: 0, color: 'red' },
	})
	useEffect(() => {

		// Wait for 3 seconds
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, []);

	// ...
	return (!!isLoading &&
	
			<animated.h1 style={{ textAlign: 'center', fontSize:'40px', ...styles }}>Baran Alexander</animated.h1>)
};


