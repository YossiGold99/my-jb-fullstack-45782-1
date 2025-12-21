import requests
from bs4 import BeautifulSoup
import re
from rich.console import Console
from rich.table import Table
from rich import box

def reverse_hebrew(text):
    # Reverses only Hebrew characters for correct display
    pattern = r'[\u0590-\u05FF]+'
    return re.sub(pattern, lambda match: match.group(0)[::-1], text)

def scrape_weather_fixed():
    url = "https://weather.walla.co.il/israel"
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
    
    console = Console()
    
    with console.status("[bold green]Fetching weather data...", spinner="dots"):
        response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, "html.parser")
        # Find list items that contain a degree symbol
        city_items = soup.find_all(lambda tag: tag.name == "li" and "°" in tag.text and len(tag.text) < 60)
        
        # Create table
        table = Table(title="Israel Weather Forecast", box=box.ROUNDED, style="cyan")
        table.add_column("City", justify="right", style="magenta", no_wrap=True)
        table.add_column("Temp", justify="center", style="green", no_wrap=True)

        for item in city_items:
            full_text = item.text.strip().replace('\n', ' ')
            
            # --- THE FIX ---
            # Use Regex to find the temperature pattern (e.g., "25°" or "18° - 10°")
            # \d+ matches numbers, ° matches the symbol.
            temp_match = re.search(r'(\d+°\s*-?\s*\d*°?)', full_text)
            
            if temp_match:
                # 1. Extract the clean temperature string
                temperature = temp_match.group(0)
                
                # 2. Get the City name by taking everything BEFORE the temperature
                # We split the full text by the temperature and take the first part
                parts = full_text.split(temperature)
                city_raw = parts[0].strip()
                
                # 3. Reverse the Hebrew city name for display
                city_display = reverse_hebrew(city_raw)
                
                table.add_row(city_display, temperature)
            else:
                # Fallback if pattern isn't found
                table.add_row(reverse_hebrew(full_text), "-")
        
        console.print(table)
            
    else:
        console.print(f"[bold red]Error: {response.status_code}[/bold red]")

if __name__ == "__main__":
    scrape_weather_fixed()