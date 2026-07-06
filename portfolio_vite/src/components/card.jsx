import { Link } from 'react-router-dom';

const Card = () => {
  return (
  <div className="flex space-x-10">
    
  <div className="relative w-[200px] h-[200px] group cursor-pointer">
    <div className="absolute top-6 left-6 bg-white w-[200px] h-[200px]  z-10 border-solid border-2 border-black  hover:border-white  flex items-center justify-center transition-colors duration-300 group-hover:bg-black">
        <p className="absolute  text-black group-hover:text-white">web development</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute bottom-4 top-7 right-16  text-black group-hover:text-white text-sm w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
</svg>

        <p className='absolute bottom-4 right-9 transform -translate-x-1/2 text-black group-hover:text-white animate-bounce text-sm'>Read more ▷</p>
    </div>
  </div>


  <div className="relative w-[200px] h-[200px] group cursor-pointer">
    <div className="absolute top-6 left-6 bg-white w-[200px] h-[200px]  z-10 border-solid border-2 border-black  hover:border-white  flex items-center justify-center transition-colors duration-300 group-hover:bg-black">
        <p className="absolute  text-black group-hover:text-white">UX UI desige</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute bottom-4 top-7 right-16  text-black group-hover:text-white text-sm w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>


        <p className='absolute bottom-4 right-9 transform -translate-x-1/2 text-black group-hover:text-white animate-bounce text-sm'>Read more ▷</p>
    </div>
  </div>


    <Link 
  to="/Myphoto" 
  className="relative w-[200px] h-[200px] group cursor-pointer block"
>
  <div className="absolute top-6 left-6 bg-white w-[200px] h-[200px] z-10 border-solid border-2 border-black hover:border-white flex items-center justify-center transition-colors duration-300 group-hover:bg-black">
    
    <p className="absolute text-black group-hover:text-white">Photo Graphy</p>
    
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute bottom-4 top-7 right-16 text-black group-hover:text-white text-sm w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
    </svg>

    <p className='absolute bottom-4 right-9 transform -translate-x-1/2 text-black group-hover:text-white animate-bounce text-sm'>Read more ▷</p>

  </div>
</Link>

</div>
  );
};

export default Card;