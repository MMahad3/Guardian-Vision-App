from fastapi import APIRouter

router = APIRouter()

@router.get("/test")
def test_endpoint():
    return {"message": "API is working!"}
