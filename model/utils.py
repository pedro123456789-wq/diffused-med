import aivm_client as aic
import torch
from torchvision import transforms

DIAGNOSIS_CLASSIFIER_MODEL = "DIAGNOSIS_CLASSIFIER"
ALZHEIRMERS_CLASSIFIER_MODEL = "ALZHEIRMER_IMG_CLASSIFIER"


def upload_models():
    # load tiny bert text classifier
    try:
        aic.upload_bert_tiny_model(
            "./saved-models/diagnosis-classifier.onnx", DIAGNOSIS_CLASSIFIER_MODEL)
    except Exception:
        print("Diagnosis text classifier already exists")

    # load leNet image classifier
    try:
        aic.upload_lenet5_model(
            "./saved-models/alzheimer-image-classifier.pth", ALZHEIRMERS_CLASSIFIER_MODEL)
    except Exception:
        print("Alzheimer's image classifier already exists")


def classify_symptoms(text):
    labels = [
        "drug reaction",
        "allergy",
        "chicken pox",
        "diabetes",
        "psoriasis",
        "hypertension",
        "cervical spondylosis",
        "bronchial asthma",
        "varicose veins",
        "malaria",
        "dengue",
        "arthritis",
        "impetigo",
        "fungal infection",
        "common cold",
        "gastroesophageal reflux disease",
        "urinary tract infection",
        "typhoid",
        "pneumonia",
        "peptic ulcer disease",
        "jaundice",
        "migraine"
    ]

    tokens = aic.tokenize(text,)
    encrypted_tokens = aic.BertTinyCryptensor(*tokens)
    result = aic.get_prediction(encrypted_tokens, DIAGNOSIS_CLASSIFIER_MODEL)
    probs = torch.nn.functional.softmax(result[0])
    return probs


def classify_brain_scan(image):
    # image: PIL image file
    #returns the class label

    labels = [
        "Mild demented",
        "Moderate demented",
        "Non demented",
        "Very mild demented"
    ]

    # pytorch transformation to make image ready for model
    transform = transforms.Compose([
        transforms.ToPILImage(),
        transforms.Resize((28, 28)),  # Resize to 28x28
        transforms.Grayscale(num_output_channels=1),  # Convert to grayscale
        transforms.ToTensor(),  # Convert image to Tensor
        transforms.Normalize((0.5,), (1.0,))
    ])
    img_tensor = transform(image)

    # encrypt image tensor
    encrypted_input = aic.LeNet5Cryptensor(img_tensor.reshape(1, 1, 28, 28))
    label_cls = torch.argmax(aic.get_prediction(encrypted_input, ALZHEIRMERS_CLASSIFIER_MODEL)[0])
    return labels[label_cls] 
