import { useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { Contact } from '../types/contact'
import MoreInformation from './MoreInformation';

type Props = {
    contact: Contact;
}

const ContactList = ({contact}: Props) => {
  const { width } = useWindowDimensions();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const justify = width > 1023 ? "justify-start" : "justify-around";
  
  return (
    <div className='flex justify-center flex-col w-full min-h-[60px] my-2 rounded-md border-slate-600 border-[1px] shadow-lg
     text-white text-xs sm:text-sm md:text-base font-light'>
        <div className={`flex ${justify} pt-2`}>
          <div className='w-1/6 self-center'>
            <h3 className="lg:ml-3">{contact.name}</h3>
          </div>
          <div className='w-1/5 self-center'>
            <h3 className="lg:ml-3">{contact.username}</h3>
          </div>
          <div className='w-1/4 self-center'>
            <h3>{contact.phone}</h3>
          </div>
          {width > 1023 && 
            <div className='w-1/4 self-center '>
            <a className='underline underline-offset-2' href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          }
          
        </div>
        {isExpanded && (
        <div className="w-full">
          {/* sending props */}
          <MoreInformation contact={contact} />
        </div>
      )}

        {/* Drop down button */}
        <div className='self-end'>
          <button onClick={() => {
            setIsExpanded(previous => !previous);
          }}
          className='w-[30px]'>
          {isExpanded ? (
            <svg
              className="w-8 mt-6 md:mt-4 h-[25px] md:h-[35px] text-white"
              viewBox="5 0 30 25"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="6 15 12 9 18 15" />
            </svg>
          ) : (
            <svg
              className="w-8 h-[25px] md:h-[35px] text-white"
              viewBox="5 0 30 25"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="6 9 12 15 18 9" />
            </svg>
          )}
          </button>
        </div>
    </div>
    
  )
}



export default ContactList;