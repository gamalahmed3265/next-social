import Image from "next/image"

let imagesUrl=[

  "https://cdn.pixabay.com/photo/2024/03/07/16/44/stork-8618904_1280.jpg",
];

const Strories = () => {
  return (
    <div className="p-4 rounded-lg bg-white shadow-md overflow-x-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src={imagesUrl[0]} height={80} width={80} alt="" className="w-20 h-20 rounded-full ring-2"/>
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src={imagesUrl[0]} height={80} width={80} alt="" className="w-20 h-20 rounded-full ring-2"/>
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src={imagesUrl[0]} height={80} width={80} alt="" className="w-20 h-20 rounded-full ring-2"/>
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src={imagesUrl[0]} height={80} width={80} alt="" className="w-20 h-20 rounded-full ring-2"/>
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src={imagesUrl[0]} height={80} width={80} alt="" className="w-20 h-20 rounded-full ring-2"/>
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src={imagesUrl[0]} height={80} width={80} alt="" className="w-20 h-20 rounded-full ring-2"/>
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src={imagesUrl[0]} height={80} width={80} alt="" className="w-20 h-20 rounded-full ring-2"/>
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src={imagesUrl[0]} height={80} width={80} alt="" className="w-20 h-20 rounded-full ring-2"/>
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src={imagesUrl[0]} height={80} width={80} alt="" className="w-20 h-20 rounded-full ring-2"/>
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src={imagesUrl[0]} height={80} width={80} alt="" className="w-20 h-20 rounded-full ring-2"/>
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src={imagesUrl[0]} height={80} width={80} alt="" className="w-20 h-20 rounded-full ring-2"/>
          <span className="font-medium">Ricky</span>
        </div>
      </div>
    </div>
  )
}

export default Strories