# NOTE: Replace with actual import based on Parakeet package

from parakeet import load_model

model = load_model("parakeet-tdt-0.6b")

def transcribe_audio(path):
    result = model.transcribe(path)
    return result["text"]