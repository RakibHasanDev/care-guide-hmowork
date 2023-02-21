
import { useQuery } from 'react-query';
import './contact.css'
import ContactCard from './ContactCard';

const Contacts = () => {

  

    const url = 'http://localhost:5000/contacts'

    const { data: contacts = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })

        if(isLoading){
            return <h1>Loading.......... </h1>
        }
    return (

        <div className='pb-10'>
            <div className='min-h-screen -mt-[75px]'>
                <div className=' bg-contact '>
                    <div className='h-full w-full bg-simple py-3 '>
                        <div className='  w-[95%] mx-auto mt-[25vh] lg:text-4xl text-2xl text-center text-white lobStar '>
                            <p className='mt-2 '>

                                Welcome Cottage Home Care Service
                            </p>
                            <p className='mt-2'>to help you or a family member live at home</p>
                            <p className='mt-2'>Contact us today! 516-367-2266</p>

                        </div>

                    </div>
                </div>

            </div>

            <div className=' -mt-24'>
                <h1 className='text-center text-[#F6811C] text-3xl font-semibold crimson'> Contact Us With The Following Offices </h1>
                <div className='grid   gap-8 w-11/12 mx-auto mt-8'>

                    {
                       contacts.map(contact=>
                       <ContactCard
                       key={contact.id}
                       contact={contact}
                       >


                       </ContactCard>) 
                    }

                  



                </div>
            </div>



        </div>



    );
};

export default Contacts;