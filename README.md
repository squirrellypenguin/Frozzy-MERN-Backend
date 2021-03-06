# FrozzyBE

Basic API structure [Frozzy](https://github.com/squirrellypenguin/frozzy-frontend). An app for Ice Creem Stores selling products with CRUD routes.

**Model Store**
```
		name: String,
		description: String,
		img: String,
		location: String,
		rating: [Number]
```
* Routes
	* GETS
		* `/store/:id` - Returns store based on DB uni_id
		* `/store` - Returns all stores
		* `/store/search/:search` - Provides partial search on name
	* PUTS
		* `/store/:id` - Update any part of the entry
		* `/store/rating/:id` - Adds rating to the array in the collection	
	* POST
		* `/store` - Create new store
	* DELETE
		* `/store` - Remove store
	* SEED
		* `/store/seed` - Clear and populate DB
		
**Model Creem**
```
		name: String,
		description: String,
		img: String,
		cost: Number,
		story: String,
		rating: [Number]
```
* Routes
	* GETS
		* `/creem/:id` - Returns creem based on DB uni_id
		* `/creem` - Returns all creems
		* `/creem/search/:search` - Provides partial search on name
	* PUTS
		* `/creem/:id` - Update any part of the entry
		* `/creem/rating/:id` - Adds rating to the array in the collection	
	* POST
		* `/creem` - Create new creem
	* DELETE
		* `/creem/:id` - Remove creem
	* SEED
		* `/creem/seed` - Clear and populate DB

**Model User**
```
		user: String,
  		first: String,
		  last: String,
		  email: String,
		  phone: Number,
		  address: String,
		  city: String,
		  state: String,
		  zip: Number,
		  faves: [String], <- need to restrict to ObjectId of Creem then cross populate possible

		  img: String
```
* Routes
	* GETS
		* `/user/:id` - Returns user based on DB uni_id
		* `/user` - Returns all users
	
	* PUTS
		* `/user/:id` - Update any part of the entry
		* `/user/faves/:id` - Adds rating to the array in the collection	
	* POST
		* `/user` - Create new user
	* DELETE
		* `/user/:id` - Remove user
	* SEED
		* `/user/seed` - Clear and populate DB