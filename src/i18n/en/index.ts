import type { BaseTranslation } from '../i18n-types';

const en = {
	pages: {
		home: 'Home',
		products: 'Products',
		artists: 'Artists',
		contact: 'Contact'
	},
	cookies: {
		title: 'This site uses cookies',
		description:
			'We use cookies to improve your experience on our website. By browsing this website, you agree to our use of cookies.',
		acceptLabel: 'Accept',
		settingsLabel: 'Cookie settings',
		necessary: 'Necessary cookies',
		necessaryDescription:
			'Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.'
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
		emptyCarousel: 'No result found',
		searchResults: 'Results of',
		next: 'Next',
		updating: 'Updating cart...'
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
		addresses: 'My addresses',
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
		videoSectionTitle: 'Welcome to',
		videoSectionSubtitle:
			'Find the pair of sneakers that suits you, personalized by talented artists. Discover our selection of unique sneakers, created by our artists for you.',
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
			recentOrders: 'Recent orders',
			completed: 'completed',
			savedAddresses: 'saved',
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
	},
	cart: {
		title: 'Cart',
		summarize: 'Order summary',
		placeOrder: 'Place order',
		exploreProducts: 'Explore products',
		cartEmpty:
			"You don't have anything in your cart. Let's change that, use the link below to start browsing our products.",
		quantity: 'Quantity',
		cartUpdated: 'Cart updated'
	},
	checkout: {
		address: {
			title: 'Shipping address',
			chooseAddress: 'Choose an address',
			differentBilling: 'Use a different billing address',
			noAddress: 'No address saved at the moment.',
			addAddress: 'Add an address'
		},
		shipping: {
			title: 'Shipping method',
			chooseMethod: 'Choose a shipping method',
			noMethod: 'No shipping method available at the moment.',
			standard: 'Delivered within 7 working days',
			express: 'Delivered within 2 to 3 working days'
		},
		payment: {
			title: 'Cart payment'
		},
		confirmation: {
			title: 'Order confirmation',
			thanks: 'Thank you for your order!',
			confirmation: 'Your order has been placed and is being processed. You will receive a confirmation email shortly.',
			summary: 'Order summary',
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
		},
		item: 'Item',
		price: 'Price',
		previous: 'Previous',
		next: 'Next'
	},
	artists: {
		title1: 'Discover our artists',
		title2: 'their style and their universe',
		subtitle:
			'Immerse yourself in a creative world where talent and originality meet. Our talented artists add their unique touch to each pair of sneakers, transforming simple shoes into true works of art. From vibrant street art to detailed manga illustrations to realistic cinema-inspired portraits, each artist has their own distinctive style.',
		artistDescription:
			"William Cruze is a dedicated artist specializing in the creation and customization of sneakers. His unique approach to sneaker design sets him apart in the industry. Cruze's passion for blending art and footwear shines through in his designs. He is known for his attention to detail and innovative designs that captivate sneaker lovers around the world.",
		creations: 'creations',
		discoverArtist: 'Discover the artist'
	},
	contact: {
		title: 'Contact our support team',
		help: 'How can we help you ?',
		option1: 'Order',
		optionOther: 'Other',
		orderId: 'Order ID',
		message: 'Message',
		addFile: 'Add a file',
		consent: 'By submitting this form, I agree that the information entered will be used to contact me again'
	}
} satisfies BaseTranslation;

export default en;
