from sqlalchemy.orm import Session
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate
from fastapi import HTTPException
from app.utils.crypto import hash_password

def get_users(db: Session):
    return db.query(User).filter(User.status == "active").all()


def get_user_by_id(user_id: int, db: Session):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="Usuário não encontrado")
    return user

def create_user(user: UserCreate, db: Session):
    db_user = User(
        name = user.name, 
        email = user.email,
        hashed_password = hash_password(user.password),
        status = "active"
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def update_user(user_id: int, user_data: UserUpdate, db: Session):
    user = get_user_by_id(user_id, db)

    if user_data.name is not None:
        user.name = user_data.name
    if user_data.email is not None:
        user.email = user_data.email

    db.commit()
    db.refresh(user)
    return user

def delete_user(user_id: int, db: Session):
    user = get_user_by_id(user_id, db)

    if(user.status != "active"):
        return
    user.status = "deleted"
    db.commit()