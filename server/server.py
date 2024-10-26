from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)   # Lets Next JS app make requests to the server

@app.route('/', methods=['GET'])
def hello():
    return jsonify(message="Hello world!")

@app.route('/api/dx/send_text', methods =['POST'])
def dx_test():
    return jsonify(message="Text received.")


@app.route('/api/dx/send_picture', methods = ['POST'])
def dx_picture():
    return jsonify(message="Photo received.")

@app.route('/api/translation')
def translation():
    return

if __name__ == '__main__':
    app.run(debug=True, port=8080)