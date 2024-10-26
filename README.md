# Decentralized AI Diagnosis Web Application
This web application utilizes **Nillium Decentralized AI** to provide medical image classification and symptom-based diagnosis. The frontend is developed using **Next.js** for a responsive and interactive user experience, while the backend is powered by **Flask**, handling image and symptom data for Nillium-based AI processing.

## Features
- **Automatic Diagnosis**: Given a description of the symptoms, we generate the 3 most likely diagnosis using Nillion's secure TinyBert model. 
- **Alzheimer's identification**: Given a brain MRI scan, we generate a description of the stage of Alzheimer's that the brain is in, using LeNet5. 
- **Translation**: Generic translation of text to allow doctors to understand patients from different countries

## Technology Stack
- **Frontend**: Next.js
- **Backend**: Flask
- **AI Model**: Nillium Decentralized AI

## Running the Project

### Prerequisites
- **Node.js** and **npm** for Next.js
- **Python 3.x** and **pip** for Flask
- **Nillium** access


### 1. Clone the Repository
```bash
git clone https://github.com/pedro123456789-wq/nillion-med-translator.git
cd nillion-med-translator
```


### 2. Frontend Setup (Next.js)
Install dependencies, and start the Next.js development server.

```bash
npm install
npm run dev
```

The Next.js app will be running on `http://localhost:3000`.


### 3. Backend Setup (Flask)
Navigate to the `server` directory, create a virtual environment, install dependencies, and start the Flask server.

```bash
cd server
python3 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
python server.py
```

The Flask app will be running on `http://localhost:8080`.


### 4. Run the nillium aivm 
```bash
aivm-devnet
```


## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.


## Contributing
Contributions are welcome! Please submit a pull request or open an issue to suggest improvements or report bugs.
