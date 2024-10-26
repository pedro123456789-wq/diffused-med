from flask import Flask, request, jsonify
from flask_cors import CORS
from translation_model import get_translate

#app instance
app = Flask(__name__)
CORS(app)   # Lets Next JS app make requests to the server

@app.route('/', methods=['GET'])
def hello():
    return jsonify(message="Hello world!")

@app.route('/api/dx')
def diagnosis():
    return

@app.route('/api/translation')
def translation():
    data = request.json
    input_text = data.get('input_text', '') # defaults to empty string is input_text unavailable
    
    translated_text = get_translate(input_text) # translate the text with LLM model here
    return jsonify({"translated_text" : translated_text})

if __name__ == '__main__':
    app.run(debug=True, port=8080)