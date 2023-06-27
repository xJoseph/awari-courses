class Contact {

  name: string;
  phone: string;
  email: string;
  address: string;

    constructor(name: string, phone: string, email: string, address: string) {
      this.name = name;
      this.phone = phone;
      this.email = email;
      this.address = address;
    }

    showDetails() {
      console.log('Nome:', this.name);
      console.log('Telefone:', this.phone);
      console.log('Email:', this.email);
      console.log('Endereço:', this.address);
    }
  }
  
  class ContactsList {

    contacts: Contact[];

    constructor() {
      this.contacts = [];
    }
  
    addContact(contact: Contact): void {
      this.contacts.push(contact);
    }
  
    removeContact(contact: Contact): void {
      const index = this.contacts.indexOf(contact);
      if (index !== -1) {
        this.contacts.splice(index, 1);
      }
    }
  
    searchContact(name: string){
      return this.contacts.find(contact => contact.name === name);
    }
  
    showContacts(): void {
      this.contacts.forEach(contact => {
        contact.showDetails();
        console.log('-------------------------');
      });
    }
  }
  
  const list = new ContactsList();
  
  const contact1 = new Contact('João', '41999999999', 'joao@email.com', 'Rua A nº 1');
  const contact2 = new Contact('Maria', '41888888888', 'maria@email.com', 'Rua B nº 2');
  
  list.addContact(contact1);
  list.addContact(contact2);
  
  list.showContacts();
  
  const findedContact = list.searchContact('João');
  if (findedContact) {
    console.log('Finded contact:');
    findedContact.showDetails();
  } else {
    console.log('Contact not found.');
  }
  
  list.removeContact(contact1);
  
  list.showContacts()