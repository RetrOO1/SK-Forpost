from database.models import UserModel
from database.postgresql import get_session
import uuid
from sqlalchemy import select

class AufService:
    async def create_user(self, login: str, password: str):
        async with get_session() as session:
            user = UserModel(
                uuid=uuid.uuid4(),
                login=login,
                password=password
                
            )
            
            session.add(user)
            await session.commit()
            await session.refresh(user)
        return user
    
    async def get_user_by_uuid(self, uuid: str):
        async with get_session() as session:
            stmt = select(UserModel).filter(UserModel.uuid == uuid)
                
            result = await session.execute(stmt)
            user = result.scalars().first()
        return user
    

    async def get_user_by_username(self, username: str):
        async with get_session() as session:
            stmt = select(UserModel).filter(UserModel.username == username)
                
            result = await session.execute(stmt)
            user = result.scalars().first()
        return user