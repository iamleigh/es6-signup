(function () {
	// Enable strict mode.
	"use strict";

	// Define global object if it doesn't exist.
	if ("object" !== typeof window.LQ) {
		window.LQ = {};
	}

	LQ.checkUsername = ( value ) => {
		const usernames = [
			'leighton',
			'iamleigh',
			'johndoe',
			'janedoe'
		];

		// Check if value already exists.
		const result = usernames.some( ( username ) => username === value );

		return result;
	};

	LQ.field = () => {
		const field = document.querySelector( '.lq-field' );
		const input = document.querySelector( '.lq-field input' );
		const button = document.querySelector( '.lq-button' );

		button.setAttribute( 'disabled', true );

		input.addEventListener( 'focus', () => {
			field.classList.add( 'lq-field--focus' );
		}, true );

		input.addEventListener( 'keyup', ( event ) => {
			const element = event.currentTarget;
			const value = element.value;

			if ( element && value ) {
				field.classList.add( 'lq-field--loading' );
				button.setAttribute( 'disabled', true );

				setTimeout( () => {
					field.classList.remove( 'lq-field--loading' );

					if ( LQ.checkUsername( value ) ) {
						field.classList.add( 'lq-field--error' );
						field.classList.remove( 'lq-field--success' );
					} else {
						field.classList.add( 'lq-field--success' );
						field.classList.remove( 'lq-field--error' );
						button.removeAttribute( 'disabled' );
					}
				}, 500 );
			} else {
				field.classList.remove( 'lq-field--loading' );
			}
		}, true );

		input.addEventListener( 'blur', ( event ) => {
			field.classList.remove( 'lq-field--focus' );

			if ( event.currentTarget && event.currentTarget.value ) {
				field.classList.add( 'lq-field--filled' );
			} else {
				field.classList.remove( 'lq-field--filled' );
				field.classList.remove( 'lq-field--success' );
				field.classList.remove( 'lq-field--error' );
				button.setAttribute( 'disabled', true );
			}
		}, true );
	};

	LQ.field();
})();
