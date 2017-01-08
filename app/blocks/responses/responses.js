'use strict';

import {lory} from 'lory.js';

document.addEventListener('DOMContentLoaded', () => {
	const slider = document.querySelector('.js_slider');

	lory(slider, {
		slideSpeed: 600,
		rewind: true,
		rewindSpeed: 1200
	});
});