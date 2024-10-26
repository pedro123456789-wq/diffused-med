import time
import torch
import torchvision.datasets as dset
import torchvision.transforms as transforms
import matplotlib.pyplot as plt

import aivm_client as aic # Import the Nillion-AIVM client

def get_diagnosis(symptoms_text):
    MODEL_NAME = ""
    aic.upload_bert_tiny_model("", MODEL_NAME)
    pass