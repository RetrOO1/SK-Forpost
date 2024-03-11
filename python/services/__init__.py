from services.auf_service import AufService
from services.news_service import NewsService


def get_auf_service():
    return AufService()

def get_news_service():
    return NewsService()