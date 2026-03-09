const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

async function transcribeAudio(filePath) {
  const form = new FormData();
  form.append("file", fs.createReadStream(filePath));

  const response = await axios.post(
    "http://localhost:8000/transcribe",
    form,
    { headers: form.getHeaders() }
  );

  return response.data.transcription;
}

module.exports = { transcribeAudio };