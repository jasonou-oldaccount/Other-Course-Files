# Flask applications are built around requests and responses
# Request: What the browser does, whenever you go to a website, you make a request
# Response: What the browser gives back after recieving the request

# Used to import Flask in python
# Classes in python are always capital
# Packages are lowercase
from flask import Flask, jsonify, request, render_template

# How we will be storing our data
stores = [
	{
		'name': 'My Wonderful Store',
		'items': [
			{
				'name': 'My Item',
				'price': 9.99
			}
		]
	}
]

# Unique app naming convention using special python variable
app = Flask(__name__)

# render_template
@app.route('/')
def home():
	return render_template('index.html')

# Tell our app what type of request to understand using a decorator
#@app.route('/') # root website of the webpage ex: https://www.google.com/
# Function associated with the route
#def home():
#	return "Hello, world!"

# POST - used to receive data
# GET  - used to send data back only

# POST /store data: {name:}
@app.route('/store', methods=['POST'])
def create_store():
	request_data = request.get_json()
	new_store = {
		'name' :request_data['name'],
		'items' : []
	}
	stores.append(new_store)
	return jsonify(new_store)

# GET /store/<string:name>
@app.route('/store/<string:name>') #http://127.0.0.1:5000/store/some_name
def get_store(name):
	# iterate over stores
	# if the store name matches, return it
	# If none match, return an error message
	for store in stores:
		if store['name'] == name:
			return jsonify(store)
	return jsonify({'message': 'store not found'})

# GET /store
@app.route('/store')
def get_stores():
	return jsonify({'stores': stores})

# POST /store/<string:name>/item {name:, price:}
@app.route('/store/<string:name>/item', methods=['POST'])
def create_storeItem(name):
	request_data = request.get_json()
	for store in stores:
		if store['name'] == name:
			new_item = {
				'name': request_data['name'],
				'price': request_data['price']
			}
			store['items'].append(new_item)
			return jsonify(new_item)
	return jsonify({'message': 'store not found'})

# GET /store/<string:name>/item
@app.route('/store/<string:name>/item')
def get_storeItems(name):
	# iterate over stores
	# if the store name matches, return it
	# If none match, return an error message
	for store in stores:
		if store['name'] == name:
			return jsonify({'items' : store['items']})
	return jsonify({'message': 'store not found'})

# Port to run on
app.run(port=5000)
