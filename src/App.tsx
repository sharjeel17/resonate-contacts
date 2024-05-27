import { useEffect, useState } from 'react'
import { Contact } from './types/contact';
import ContactList from './components/Contact';
import SearchIcon from './assets/SearchIcon';
import TableHeader from './components/TableHeader';


function App() {

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchName, setSearchName] = useState<string>("");
  const [isLoadingContacts, setIsLoadingContacts] = useState<boolean>(true);
  const [loadingMessage, setLoadingMessage] = useState<string>("Loading Contacts");

  useEffect(()=> {

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((result) => result.json())
    .then((data) => {
      setContacts(data as Contact[]);
      setIsLoadingContacts(false);
    })
    .catch((error) => {
      console.log(error);
      setLoadingMessage("Failed");
    })
  }, [])
   

  return (
    <div className="w-full h-full flex justify-center self-center">
      <div className='w-[90%] sm:w-3/4 h-full mt-10 sm:mt-14 rounded-xl'>
        <h1 className="text-[#f8f9fa] text-2xl sm:text-4xl font-semibold text-center sm:text-start">
        Contacts 
        </h1>
        {/* SearchBar */}
        <div className='w-full sm:w-[350px] h-10 sm:h-12 mt-10 mb-8 bg-neutral-900 rounded-2xl flex'>
          <input 
          placeholder='Search' 
          className='w-full h-full pl-4 rounded-l-2xl bg-transparent text-lg text-white outline-none' 
          value={searchName}
          onChange={(e) => {setSearchName(e.target.value)}}
          />
          <button className='w-1/4 h-full rounded-r-2xl bg-neutral-700 flex justify-center items-center'>
            <SearchIcon />
          </button>
        </div>
        <TableHeader />

        {/* Render list of contacts */}
        { isLoadingContacts ? (<p className='text-white text-xl mt-6'>{loadingMessage}</p>) : (
          contacts
          .filter((contact)=> {
            
            if(!searchName){
              return true;
            }
            return contact.name.toLowerCase().startsWith(searchName.toLowerCase());
          })
          .map((contact: Contact) => {
            return (
              <ContactList contact={contact} key={contact.id}/>
            )
          }))}

      </div>

    </div>
  )
}

export default App
