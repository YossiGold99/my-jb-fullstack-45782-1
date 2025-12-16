import requests
from bs4 import BeautifulSoup

def scrape_all_cities_weather_reversed():
    url = "https://weather.walla.co.il/israel"
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"}
    
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, "html.parser")
        
        city_items = soup.find_all(lambda tag: tag.name == "li" and "°" in tag.text and len(tag.text) < 50)
        
        print(f"Found {len(city_items)} cities:")
        print("-" * 30)
        
        for item in city_items:
            clean_text = item.text.strip().replace('\n', ' ')
            
            # CHANGE HERE: [::-1] reverses the string
            reversed_text = clean_text[::-1] 
            
            print(reversed_text)
            
    else:
        print(f"Failed to retrieve data. Status code: {response.status_code}")

if __name__ == "__main__":
    scrape_all_cities_weather_reversed()