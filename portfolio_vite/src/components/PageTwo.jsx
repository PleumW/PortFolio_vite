
import Card from "./card";

function PageTwo() {
  
  return (
    
    <div className="bg-[#e8e7e7] ">
      <div className="flex-1 h-[2px] bg-black  mb-10 w-full"></div>

      <div className="flex-none w-full h-full px-30 py-0  flex space-x-10 justify-between ">

      <div>
        <div className="flex space-x-10 px-2 py-3 items-center">
        <div className="w-[2px] h-32 bg-black"></div>
        <p className="text-sm font-bold text-black whitespace-nowrap">Web development</p>
        </div>

        <div className="w-4 h-2 bg-black rounded-full px-2 py-2"></div>

                <div className="flex space-x-10 px-2 py-3 items-center">
        <div className="w-[2px] h-32 bg-black"></div>
        <p className="text-sm font-bold text-black"> UX UI design</p>
        </div>

        <div className="w-4 h-2 bg-black rounded-full px-2 py-2"></div>

        <div className="flex space-x-10 px-2 py-3 items-center">
        <div className="w-[2px] h-32 bg-black"></div>
        <p className="text-sm font-bold text-black whitespace-nowrap">Photo Graphy</p>
        </div>



      </div>

      <div className="flex flex-col items-center justify-center w-full ml-20 h-full">


  <div className="flex flex-col items-center mb-16 text-center ">
    
    <div className="flex gap-10 px-2 py-3 justify-center items-center">
    <p className="text-[12px] text-gray-600 max-w-[500px]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, vitae rem sequi nulla exercitationem culpa. Asperiores magni at, voluptas eos reprehenderit enim nisi maiores, architecto quisquam dolorum possimus 
    </p>
    <p className="mb-6 text-xl text-black bg-black hover:bg-white text-white hover:text-black rounded-2xl w-40 h-8  transition-colors duration-300" >About me</p>
    </div>

  </div>


<Card />



</div>
</div>

<div className="flex flex-col space-x-10 px-2 py-3 items-center ">

  

<div className="flex flex-row items-center justify-between w-full h-full px-48 py-5 relative">

    <div className="absolute top-7 left-23  ">
      
    <p className="text-5xl text-white w-16 h-16 bg-black rounded-full animate-bounce">↓</p>
</div>
  
  
  




  <div className="flex flex-col items-center w-3 pt-6">
    <div className="w-4 h-4 bg-black rounded-full shrink-0"></div>
  
    <p className="mt-4 text-sm font-bold text-center text-black">Visutial studio </p>
  </div>


  <div className="flex-1 h-[2px] bg-black mx-4 mb-10"></div>

  <div className="flex flex-col items-center w-3 pt-6">
    <div className="w-4 h-4 bg-black rounded-full shrink-0"></div>
    <p className="mt-4 text-sm font-bold text-center text-black">tailwind css</p>
  </div>


  <div className="flex-1 h-[2px] bg-black mx-4 mb-10"></div>

  <div className="flex flex-col items-center w-3 ">
    <div className="w-4 h-4 bg-black rounded-full shrink-0"></div>
    <p className="mt-4 text-sm font-bold text-center text-black">vite</p>
  </div>

    <div className="flex-1 h-[2px] bg-black mx-4 mb-10"></div>

  <div className="flex flex-col items-center w-3 ">
    <div className="w-4 h-4 bg-black rounded-full shrink-0"></div>
    <p className="mt-4 text-sm font-bold text-center text-black">React</p>
  </div>

    <div className="flex-1 h-[2px] bg-black mx-4 mb-10"></div>

  <div className="flex flex-col items-center w-3 ">
    <div className="w-4 h-4 bg-black rounded-full shrink-0"></div>
    <p className="mt-4 text-sm font-bold text-center text-black">Vue</p>
  </div>

</div>

  
  
</div>

    </div>

    
    
  );
}

export default PageTwo;