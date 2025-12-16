import requests
from bs4 import BeautifulSoup

def scrape_weather_tlv():
    # 1. Change URL to an Israeli weather site (Walla Weather list for Israel)
    url = "https://weather.walla.co.il/israel"
    # headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"}
    
    # Send an HTTP GET request
    response = requests.get(url)
    
    # Check if the request was successful
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, "html.parser") #
        # Find the weather information for Tel Aviv
        tlv_weather = soup.find(lambda tag: tag.name == "li" and "תל אביב" in tag.text and "°" in tag.text)
        
        if tlv_weather:
            print(f"Weather in TLV: {tlv_weather.text.strip()}")
        else:
            # Fallback: Try a broader search if the specific tag structure changes
            print("Specific data not found. Printing all found locations:")
            items = soup.find_all(lambda tag: "תל אביב" in tag.text and "°" in tag.text)
            for item in items[:1]: # Print just the first match
                print(item.text.strip())

    else:
        print(f"Failed to retrieve data. Status code: {response.status_code}")

if __name__ == "__main__":
    scrape_weather_tlv()