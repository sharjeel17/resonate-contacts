import { Contact } from '../types/contact'
import useWindowDimensions from '../hooks/useWindowDimensions'
import AtIcon from '../assets/AtIcon'
import CompanyIcon from '../assets/CompanyIcon'

type Props = {
    contact: Contact
}

const MoreInformation = ({ contact }: Props) => {
    const { width } = useWindowDimensions();
    return (
        <>
        <div className='w-full h-[1px] bg-white mb-4 mt-2'></div>
        <div className='pt-2 flex flex-row justify-around'>
            {width < 1024 && 
            <div className='flex gap-1 items-center'>
                <AtIcon />
                <a className='underline underline-offset-2' href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            }
            <div className='flex gap-1 items-center'>
                <CompanyIcon />
                <a className='underline underline-offset-2'href={`http://${contact.website}`}>{contact.website}</a>
            </div>
        </div>
        </>
        
    )
}

export default MoreInformation;

