import { useState, useEffect, useRef } from 'react';

interface SlideshowTimerOptions {
	/** A callback to run when the timer is complete. */
	onComplete: () => void;
}

/** A hook that returns a set of functions to control a slideshow timer. */
export default function useSlideshowTimer({ onComplete }: SlideshowTimerOptions) {
	const [timer, setTimer] = useState(0);
	const [pause, setPause] = useState(false);
	const interval = useRef<null | NodeJS.Timer>(null);

	const incrementTimer = () => {
		setTimer(state => state + 20);
	};

	const pauseTimer = () => !pause && setPause(true);

	const playTimer = () => pause && setPause(false);

	const resetTimer = () => {
		interval.current && clearInterval(interval.current);
		setTimer(0);
		setPause(false);
	};

	useEffect(() => {
		if (pause && interval.current) {
			clearInterval(interval.current);
		} else {
			interval.current = setInterval(incrementTimer, 1000);
		}

		if (timer >= 100) {
			onComplete();
			clearInterval(interval.current);
			setTimer(0);
		}

		return () => {
			interval.current && clearInterval(interval.current);
		};
	}, [pause, timer, onComplete]);

	return {
		timer,
		pause: pauseTimer,
		play: playTimer,
		reset: resetTimer,
	};
}