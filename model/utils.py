import aivm_client as aic
import torch

CLASSIFIER_MODEL = "DIAGNOSIS_CLASSIFIER" 


def upload_models():
    aic.upload_bert_tiny_model("./saved-models/diagnosis-classifier.onnx", CLASSIFIER_MODEL)

def classify_symptoms(text):
    tokens = aic.tokenize(text,)
    encrypted_tokens = aic.BertTinyCryptensor(*tokens)
    result = aic.get_prediction(encrypted_tokens, CLASSIFIER_MODEL)
    probs = torch.nn.functional.softmax(result[0])
    return probs
    