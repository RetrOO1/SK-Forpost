from database.postgresql import get_session
from database.models import NewsModel
import uuid
from sqlalchemy import select, delete, update
from schemas.schemas_class import New, ModifyNew


class NewsService:
    async def add_new(self, request: New):
        async with get_session() as session:
            new = NewsModel(
                uuid=uuid.uuid4(),
                title=request.title,
                body=request.body,
                picture_url=request.picture_url
            )
            
            session.add(new)
            await session.commit()
            await session.refresh(new)
        return new

    async def get_new(self, new_id: str):
        async with get_session() as session:
            stmt = select(NewsModel).filter(NewsModel.uuid == new_id)
                
            result = await session.execute(stmt)
            new = result.scalars().first()
        return new

    async def edit_new(self, request: ModifyNew):
        async with get_session() as session:
            stmt = update(NewsModel).where(NewsModel.uuid == request.uuid).values(
                title=request.title,
                body=request.body,
                picture_url=request.picture_url

            )
            await session.execute(stmt)
            await session.commit()
      
            stmt = select(NewsModel).filter(NewsModel.uuid == request.uuid)
            result = await session.execute(stmt)
            updated_new = result.scalars().first()

        return updated_new

    async def get_all_news(self):
        async with get_session() as session:
            stmt = select(NewsModel)

            result = await session.execute(stmt)
            news = result.scalars().all()
        return news

    async def remove_new(self, new_id: str):
        async with get_session() as session:
            stmt = delete(NewsModel).filter(NewsModel.uuid == new_id)
            await session.execute(stmt)
            await session.commit()
        return {'msg': 'new removed successfully'}