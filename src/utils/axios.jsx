import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTVkMjZiM2UxNGM3MDkwYTQ2OGQ1NDEwMTJhYjM2MCIsIm5iZiI6MTc4NjQ0ODcxOS4yOSwic3ViIjoiNmE3YjBiNGZjZTlmNzllNDBlZjhmNDFmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.kAIUWhzVI__mWHTCzrnpCHcMpTXK7b0HvogrbHL5hNM",
  },
});


export default instance