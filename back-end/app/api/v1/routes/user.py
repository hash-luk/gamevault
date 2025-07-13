from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.schemas.user import UserCreate,UserUpdate,UserOut
from app.crud.user import (get_users, create_user, get_user_by_id, update_user, delete_user)

router = APIRouter(prefix="/users", tags=["Users"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/", response_model=list[UserOut])
def list_users(db: Session = Depends(get_db)):
    return get_users(db)

@router.post("/", response_model=UserOut, status_code=201)
def create_user_view(user: UserCreate, db: Session = Depends(get_db)):
    return create_user(user, db)

@router.get("/{user_id}", response_model=UserOut)
def get_user_view(user_id: int, db: Session = Depends(get_db)):
    return get_user_by_id(db, user_id)

@router.put("/{user_id}", response_model=UserOut)
def update_user_view(user_id: int, user: UserUpdate, db: Session = Depends(get_db)):
    return update_user(user_id, user, db)

@router.delete("/{user_id}", status_code=201)
def delete_user_view(user_id: int, db: Session = Depends(get_db)):
    delete_user(user_id, db)
    return {"message": "Usuário inativado com sucesso"}