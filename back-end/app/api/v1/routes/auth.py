from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.user import User
from app.schemas.auth import LoginInput
from app.utils.crypto import verify_password, create_access_token
from datetime import timedelta


router = APIRouter(prefix="/auth", tags=["Auth"])

@router.post("/login")
def login(data: LoginInput, response: Response, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == data.email, User.status == "active").first()

    if not user:
        raise HTTPException(status_code=404, detail= "User not found")

    if not verify_password(data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    access_token = create_access_token(
        data={"sub": str(user.id)}, 
        expires_delta=timedelta(minutes=60)
    )

    response.set_cookie(
        key="_session",
        value=access_token,
        httponly=True,
        secure=False,
        samesite="lax",
        max_age=60 * 60,
        path="/"
    )

    return {
        "message": "Validated user", 
        "user":{
            "id":user.id, 
            "username": user.name
        }
    }