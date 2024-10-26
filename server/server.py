from flask import Flask, request, jsonify
from flask_cors import CORS
from server.translation_model import get_translation

#app instance
app = Flask(__name__)
CORS(app)   # Lets Next JS app make requests to the server

@app.route('/', methods=['GET'])
def hello():
    return jsonify(message="Hello world!")

@app.route('/api/dx/send_text', methods=['POST'])
def dx_text():
    symptoms = request.json.get('symptoms', '')
    return jsonify(message=f'symptoms are {symptoms}')

@app.route('/api/dx/send_picture', methods=['POST'])
def dx_picture():
    image = request.files.get('image')

    if image:
        message = f"Image '{image.filename}' received and processed successfully."

        # Send a response
        return jsonify({
            "message": f"Image '{image}' received successfully.",
        }), 200

        return jsonify({"message": message}), 200
    else:
        # Return an error if no image was uploaded
        return jsonify({"error": "No image provided"}), 400

    return jsonify(message=f"Received image: {img}")

@app.route('/api/translation')
def translation():
    data = request.json
    input_text = data.get('input_text', '') # defaults to empty string is input_text unavailable
    
    translated_text = get_translate(input_text) # translate the text with LLM model here
    return jsonify({"translated_text" : translated_text})

if __name__ == '__main__':
    app.run(debug=True, port=8080)