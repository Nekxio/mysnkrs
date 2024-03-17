import type { BaseTranslation } from '../i18n-types';

const en = {
	pages: {
		home: 'Home',
		products: 'Products'
	},
	common: {
		creation: 'creation',
		creations: 'creations',
		artist: 'artist',
		artists: 'artists',
		brand: 'brand',
		brands: 'brands',
		model: 'model',
		models: 'models',
		availableModels: 'Available models',
		emptyProduct: 'No product found',
		emptyReviews: 'No review found',
		emptyCarousel: 'No result found'
	},
	header: {
		artists: 'Artists',
		sneakers: 'Sneakers',
		concept: 'The concept',
		contact: 'Contact',
		items: 'Articles',
		subtotal: 'Subtotal',
		cart: 'View cart',
		search: 'Search for a product...',
		account: 'My account',
		login: 'Log in',
		logout: 'Log out',
		register: 'Register',
		orders: 'My orders',
		settings: 'Settings'
	},
	footer: {
		artists: 'Les artistes',
		collections: 'The collections',
		concept: 'The MySnkrs concept',
		customerReviews: 'Customer reviews',
		contactUs: 'Contact us',
		usefulLinks: 'Useful links',
		brands: 'Our brands',
		information: 'Information',
		help: 'Aide',
		legal: 'Legal information',
		terms: 'Terms and conditions of sale',
		conditions: 'Conditions',
		cookies: 'Privacy Policy',
		orderStatus: 'Order status',
		shipping: 'Shipping and delivery',
		returns: 'Returns',
		payment: 'Payment methods',
		allRightsReserved: 'All rights reserved',
		follow: 'Follow us'
	},
	slider: {
		previous: 'Previous',
		next: 'Next',
		start: 'Start',
		end: 'End',
		more: 'More'
	},
	home: {
		featuredSectionTitle: 'Our current selection',
		informations: {
			firstTitle: 'Discover talented artists',
			firstDescription:
				'In fact, we collaborate with some very talented artists who give 110% to personalize and showcase unique pairs of sneakers for your enjoyment',
			secondTitle: 'Find the pair that suits you',
			secondDescription:
				'Thanks to our 11 quality partners you can easily find the pair of your dreams in 2 clicks on our website and choose a pair customized by one of our artists.',
			thirdTitle: 'Personalize the sneakers of your dreams',
			thirdDescription:
				'We offer you a wide choice of sneakers that have already been customized, with themes, patterns and colors specially created by our artists for you to choose from for your unique sneakers.'
		},
		artistsSectionTitle: 'Artists you may be interested in...',
		brands: {
			title: 'They trust us',
			description:
				"All these brands have put their trust in us. We've proven ourselves to them and shown them our quality and reliability, as well as our original ideas, which have aroused their interest,",
			cta: 'See all brands'
		},
		commentsSectionTitle: 'What our customers think'
	},
	categories: {
		sport: 'Sport',
		street: 'Street',
		originals: 'Originals'
	},
	productDetails: {
		sizeSelection: {
			title: 'Choose your size',
			placeholder: 'Choose a size',
			available: 'available'
		},
		wishlist: 'Add to wishlist',
		addToCart: 'Add to cart',
		informations: {
			seller: 'Sale and send by',
			delivery: 'Delivery 24hours with Chronopost',
			payment: 'Payment in 3 instalments, free of charge',
			return: '30 jours pour changer d’avis'
		},
		productDetails: 'Product details',
		deliveryReturns: 'Delivery and returns',
		relatedProducts: 'You may also like',
		sameCollection: 'Also available by the same brand'
	},
	account: {
		auth: {
			firstName: 'First name',
			lastName: 'Last name',
			email: 'Email',
			phoneNumber: 'Phone number',
			password: 'Password',
			register: 'Register',
			login: 'Log in',
			loginSection: {
				forgotPassword: 'Forgot your password?',
				noAccountTitle: 'You don’t have an account ? Register now !',
				noAccountDescription:
					'Would you like to have your own unique pair personalized by talented artists? Then join us!',
				register: 'Créer un compte'
			},
			registerSection: {
				confirmPassword: 'Confirm password',
				alreadyAccountTitle: 'Already have an account? Log in!',
				alreadyAccountDescription:
					'Log in to find your favorite artists, designs and suggestions tailored to your profile!'
			}
		},
		dashboard: {
			title: 'Account',
			logout: 'Log out',
			hello: 'Hello',
			signedInAs: 'Signed in as',
			overview: 'Overview',
			update: 'Update',
			updateInProgress: 'Updating...',
			updateCompleted: 'Updated',
			add: 'Add',
			inProgress: 'Progressing ...',
			addCompleted: 'Added',
			error: 'An error occurred. Please try again.',
			search: 'Search...',
			selectCountry: 'Select a country',
			profile: {
				title: 'Profile',
				description:
					'View and update your profile information, including your name, email, and phone number. You can also update your billing address, or change your password.'
			},
			addresses: {
				title: 'Addresses',
				description:
					'View and update your shipping addresses, you can add as many as you like. Saving your addresses will make them available during checkout.',
				newAddress: 'New address',
				company: 'Company',
				address: 'Address',
				addressComplement: 'Address complement',
				addressComplementPlaceholder: 'Apartment, suite, etc.',
				postalCode: 'Postal code',
				city: 'City',
				province: 'Province / State',
				country: 'Country',
				selectCountry: 'Select a country'
			},
			orders: {
				title: 'Orders',
				description:
					'View your previous orders and their status. You can also create returns or exchanges for your orders if needed.',
				emptyOrders: 'No orders yet',
				emptyOrdersDescription: 'You have not placed any orders yet.',
				continueShopping: 'Continue shopping',
				items: 'item(s)',
				seeDetails: 'See details',
				more: 'more',
				details: {
					title: 'Order details',
					emailConfirmation: 'We have sent the order confirmation details to',
					orderNumber: 'Order number',
					orderDate: 'Order date',
					delivery: 'Delivery',
					shippingAddress: 'Shipping address',
					contact: 'Contact',
					shippingMethod: 'Shipping method',
					orderSummary: 'Order summary',
					subtotal: 'Subtotal',
					shipping: 'Shipping',
					taxes: 'Taxes',
					total: 'Total',
					needHelp: 'Need help ?',
					returnExchanges: 'Return & Exchanges'
				}
			}
		}
	}
} satisfies BaseTranslation;

export default en;
