from sqlalchemy.sql.schema import ForeignKey
from sqlalchemy import Column, String, UUID
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()


class NewsModel(Base):
    __tablename__ = 'news'
    uuid = Column(UUID(as_uuid=True), primary_key=True)
    title = Column(String)
    body = Column(String)
    picture_url = Column(String)

class UserModel(Base):
    __tablename__ = 'users'
    uuid = Column(UUID(as_uuid=True), primary_key=True)
    login = Column(String)
    password = Column(String)


