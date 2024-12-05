(function () {
	// Enable strict mode.
	"use strict";

	// Define global object if it doesn't exist.
	if ("object" !== typeof window.LQ) {
		window.LQ = {};
	}

	LQ.field = () => {
		const inputs = document.querySelectorAll( '.lq-field input' );

		inputs.forEach( ( input, index ) => {
			input.addEventListener( 'focus', ( event ) => {
				const wrapper = event.currentTarget.parentElement;
				const field = wrapper.parentElement;

				field.classList.add( 'lq-field--focus' );
			}, true );

			input.addEventListener( 'blur', ( event ) => {
				const wrapper = event.currentTarget.parentElement;
				const field = wrapper.parentElement;

				field.classList.remove( 'lq-field--focus' );

				if ( event.currentTarget && event.currentTarget.value ) {
					field.classList.add( 'lq-field--filled' );
				} else {
					field.classList.remove( 'lq-field--filled' );
				}
			}, true );
		});
	};

	LQ.field();
})();
