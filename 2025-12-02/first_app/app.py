from enum import Enum 
import json

class Action(Enum):
    ADD = 1
    KILL = 2
    UPDATE = 3
    DISPLAY = 4
    EXIT = 5

contacts = []

def display_menu():
    for item in Action:
        print (f"{item.name} -  {item.value}")
    user_selction =Action(int (input("Sellect form the menu..")))
    return user_selction
# You can write it like this
# def display_menu():
#     for item in Action: print (f"{item.name} -  {item.value}")
#     return Action(int (input("Sellect form the menu..")))

def add_contact():
    first_name = input("Enter first name: ")
    last_name = input("Enter last name: ")  
    contacts.append({'first_name': first_name, 'last_name': last_name})

def update_contact():
    if not contacts:
        print("No contacts to update!")
        return
    
    # Display all contacts with index numbers
    print("=== Select a contact to update ===")
    for i, contact in enumerate(contacts):
        print(f"{i + 1}. {contact['first_name']} {contact['last_name']}")
    
    # Get user selection
    try:
        choice = int(input("Enter contact number: ")) - 1
        if 0 <= choice < len(contacts):
            # Get new information
            new_first = input(f"Enter new first name (current: {contacts[choice]['first_name']}): ")
            new_last = input(f"Enter new last name (current: {contacts[choice]['last_name']}): ")
            # Update the contact
            contacts[choice]['first_name'] = new_first
            contacts[choice]['last_name'] = new_last
            print("Contact updated successfully!")
        else:print("Invalid contact number!")
    except ValueError: print("Please enter a valid number.")


def kill_contact():
    if not contacts:
        print("No contacts to delete!")
        return
    # Display all contacts with index numbers
    print("\n=== Select a contact to delete ===")
    for i, contact in enumerate(contacts):
        print(f"{i + 1}. {contact['first_name']} {contact['last_name']}")
    # Get user selection
    try:
        choice = int(input("Enter contact number to delete: ")) - 1
        if 0 <= choice < len(contacts):
            deleted = contacts.pop(choice)  # Remove and return the deleted contact
            print(f"Deleted: {deleted['first_name']} {deleted['last_name']}")
        else:print("Invalid contact number!")
    except ValueError: print("Please enter a valid number.")

def display_contacts():
    if not contacts:
        print("No contacts available!")
        return
    # ANSI color codes
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    RESET = '\033[0m'
    
    print(CYAN + "="*50 + RESET)
    print(CYAN + f"{'No.':<5} {'First Name':<20} {'Last Name':<20}" + RESET)
    print(CYAN + "="*50 + RESET)
    
    for i, contact in enumerate(contacts, 1):
        first = contact['first_name']
        last = contact['last_name']
        print(GREEN + f"{i:<5} {first:<20} {last:<20}" + RESET)
    print(CYAN + "="*50 + RESET)

if __name__ == "__main__":
    with open('contacts.json', 'r') as f:
        contacts = json.load(f)
    while(True):
        user_selction = display_menu()
        if user_selction == Action.ADD : add_contact()
        if user_selction == Action.KILL : kill_contact()
        if user_selction == Action.UPDATE : update_contact()
        if user_selction == Action.DISPLAY : display_contacts() 
        if user_selction == Action.EXIT :
            with open('contacts.json', 'w',) as f: json.dump(contacts, f, indent=4)
            exit()

