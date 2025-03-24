from fastapi import FastAPI
from routes import api
from Backend.routes import api

app = FastAPI()

# Include the API routes
app.include_router(api.router)

@app.get("/")
def read_root():
    return {"message": "Backend is running successfully!"}

