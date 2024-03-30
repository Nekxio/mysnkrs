import type { BaseTranslation } from '../i18n-types.js';

const fr = {
	pages: {
		home: 'Accueil',
		products: 'Produits'
	},
	common: {
		creation: 'création',
		creations: 'créations',
		artist: 'artiste',
		artists: 'artistes',
		brand: 'marque',
		brands: 'marques',
		model: 'modèle',
		models: 'modèles',
		availableModels: 'modèles disponibles',
		emptyProduct: 'Aucun produit trouvé',
		emptyReviews: 'Aucun produit trouvé',
		emptyCarousel: 'Aucun résultat trouvé',
		searchResults: 'Résultats pour'
	},
	header: {
		artists: 'Artistes',
		sneakers: 'Sneakers',
		concept: 'Le concept',
		contact: 'Contact',
		items: 'Articles',
		subtotal: 'Sous-total',
		cart: 'Voir le panier',
		search: 'Rechercher un produit...',
		account: 'Mon compte',
		login: 'Se connecter',
		logout: 'Se déconnecter',
		register: "S'inscrire",
		orders: 'Mes commandes',
		settings: 'Paramètres'
	},
	footer: {
		artists: 'Les artistes',
		collections: 'Les collections',
		concept: 'Le concept MySnkrs',
		customerReviews: 'Avis clients',
		contactUs: 'Contactez-nous',
		usefulLinks: 'Liens utiles',
		brands: 'Nos marques',
		information: 'Informations',
		help: 'Aide',
		legal: 'Mentions légales',
		terms: 'Conditions générales de vente',
		conditions: 'Conditions',
		cookies: 'Politique de confidentialité',
		orderStatus: 'Statut de la commande',
		shipping: 'Expédition et livraison',
		returns: 'Retours',
		payment: 'Moyens de paiement',
		allRightsReserved: 'Tous droits réservés',
		follow: 'Suivez-nous'
	},
	slider: {
		previous: 'Précédent',
		next: 'Suivant',
		start: 'Début',
		end: 'Fin',
		more: 'Voir tout'
	},
	home: {
		featuredSectionTitle: 'Notre sélection du moment',
		informations: {
			firstTitle: 'Découvre des artistes talentueux',
			firstDescription:
				'En effet nous collaborons avec des artistes très talentueux qui se donnent à 110% pour personnaliser et mettre en valeur des paires de baskets uniques pour votre plus grande joie.',
			secondTitle: 'Trouve la paire qui te convient',
			secondDescription:
				'Grâce à nos 11 partenaires de qualité vous pouvez facilement trouver la paire de vos rêves en 2 clics sur notre site web et choisir une paire personnalisée par l’un de nos artistes.',
			thirdTitle: 'Personalise les sneakers de tes rêves',
			thirdDescription:
				'Nous mettons à votre disposition un choix varié de baskets déjà personnalisé, des thèmes, des motifs et des couleurs créés spécialement par nos artistes que vous pourrez choisir pour vos baskets uniques.'
		},
		artistsSectionTitle: 'Des artistes qui peuvent vous intéresser...',
		statistics: {
			title: 'Pourquoi nous choisir ?',
			description:
				'Nous vous proposons un large choix de modèles, en collaboration avec nos 11 marques de qualité, elles nous fournissent leurs paires les plus vendues afin de mettre à l’honneur le talent de nos 50 artistes Sneakers pour la réalisation de vos paires uniques. Alors pourquoi pas vous ?',
			cta: 'Voir notre catalogue'
		},
		brands: {
			title: 'Ils nous font confiance',
			description:
				'Toutes ces marques nous font confiance, on a fait nos preuves à leurs côtés et leurs avons montrés notre qualité de travail ainsi que notre sérieux, mais aussi nos idées originales qui ont suscité leurs intérêt.',
			cta: 'Voir toutes les marques'
		},
		commentsSectionTitle: 'Ce que nos clients pensent de nous...'
	},
	categories: {
		sport: 'Sport',
		street: 'Street',
		originals: 'Originals'
	},
	productDetails: {
		sizeSelection: {
			title: 'Sélectionner une taille',
			placeholder: 'Choisir une taille',
			available: 'disponible(s)'
		},
		wishlist: 'Ajouter à ma liste de souhaits',
		addToCart: 'Ajouter au panier',
		informations: {
			seller: 'Vendu et expédié par',
			delivery: 'Livraison 24H avec Chronopost',
			payment: 'Paiement en 3 fois sans frais',
			return: '30 jours pour changer d’avis'
		},
		productDetails: 'Détails du produit',
		deliveryReturns: 'Livraison et retours',
		relatedProducts: 'Vous pourrez également aimer aussi',
		sameCollection: 'Également disponible dans cette marque'
	},
	account: {
		auth: {
			firstName: 'Prénom',
			lastName: 'Nom',
			email: 'Adresse e-mail',
			password: 'Mot de passe',
			phoneNumber: 'Numéro de téléphone',
			register: 'Créer un compte',
			login: 'Se connecter',
			loginSection: {
				forgotPassword: 'Mot de passe oublié ?',
				noAccountTitle: 'Vous n’avez pas de compte ? Inscrivez-vous !',
				noAccountDescription:
					'Vous souhaitez avoir votre paire unique personnalisée par des artistes de talent ? Alors rejoignez-nous !',
				register: 'Créer un compte'
			},
			registerSection: {
				confirmPassword: 'Confirmer le mot de passe',
				alreadyAccountTitle: 'Vous avez déjà un compte ? Connectez-vous !',
				alreadyAccountDescription:
					'Connectez-vous afin de retrouvez vos artistes, designs favoris ainsi que nos suggestions adaptées à votre profil !'
			}
		},
		dashboard: {
			title: 'Mon compte',
			logout: 'Se déconnecter',
			hello: 'Bonjour',
			signedInAs: 'Connecté en tant que',
			overview: 'Aperçu',
			update: 'Mettre à jour',
			updateInProgress: 'Mis à jour...',
			updateCompleted: 'Mis à jour',
			add: 'Ajouter',
			addInProgress: 'Ajout en cours...',
			addCompleted: 'Ajouté',
			error: 'Une erreur est survenue. Veuillez réessayer.',
			search: 'Rechercher...',
			selectCountry: 'Sélectionner un pays',
			recentOrders: 'Dernières commandes',
			completed: 'complété',
			savedAddresses: 'enregistrées',
			profile: {
				title: 'Mon profil',
				description:
					'Consultez et mettez à jour les informations de votre profil, notamment votre nom, votre adresse électronique et votre numéro de téléphone. Vous pouvez également mettre à jour votre adresse de facturation ou modifier votre mot de passe.'
			},
			addresses: {
				title: 'Mes adresses',
				description:
					"Affichez et mettez à jour vos adresses de livraison, vous pouvez en ajouter autant que vous le souhaitez. L'enregistrement de vos adresses les rendra disponibles lors du paiement.",
				newAddress: 'Nouvelle adresse',
				company: 'Société',
				address: 'Adresse',
				addressComplement: 'Complément d’adresse',
				addressComplementPlaceholder: 'Appartement, suite, etc.',
				postalCode: 'Code postal',
				city: 'Ville',
				province: 'Région / État',
				country: 'Pays',
				selectCountry: 'Sélectionner un pays'
			},
			orders: {
				title: 'Mes commandes',
				description:
					"Consultez vos commandes précédentes et leur état d'avancement. Vous pouvez également créer des retours ou des échanges pour vos commandes si nécessaire.",
				emptyOrders: 'Aucune commande trouvée',
				emptyOrdersDescription: 'Vous n’avez pas encore passé de commande.',
				continueShopping: 'Voir tous les produits',
				items: 'article(s)',
				seeDetails: 'Voir les détails',
				more: 'supplémentaires',
				details: {
					title: 'Détails de la commande',
					emailConfirmation: 'Nous avons envoyé les détails de confirmation de commande à',
					orderNumber: 'Numéro de commande',
					orderDate: 'Date de commande',
					delivery: 'Livraison',
					shippingAddress: 'Adresse de livraison',
					contact: 'Contact',
					shippingMethod: 'Méthode de livraison',
					orderSummary: 'Résumé de la commande',
					subtotal: 'Sous-total',
					shipping: 'Livraison',
					taxes: 'Taxes',
					total: 'Total',
					needHelp: "Besoin d'aide ?",
					returnExchanges: 'Retours & Échanges'
				}
			}
		}
	},
	cart: {
		title: 'Mon panier',
		summarize: 'Résumer de la commande',
		placeOrder: 'Passer la commande',
		exploreProducts: 'Explorer les produits',
		cartEmpty:
			'Votre panier est vide. Trouvons une paire qui vous convient, utilisez le lien ci-dessous pour commencer à parcourir nos produits.',
		quantity: 'Quantité'
	}
} satisfies BaseTranslation;

export default fr;
