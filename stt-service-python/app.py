from fastapi import FastAPI, UploadFile, File
from parakeet_model import transcribe_audio
import os

app = FastAPI()

@app.post("/transcribe")
async def transcribe(file: UploadFile = File(...)):
    audio_path = f"temp_{file.filename}"

    with open(audio_path, "wb") as f:
        f.write(await file.read())

    text = transcribe_audio(audio_path)

    os.remove(audio_path)  # clean temp file

    return {"transcription": text}