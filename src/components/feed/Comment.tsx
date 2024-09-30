import Image from 'next/image'
import React from 'react'

const Comment = () => {
  return (<div className="flex gap-4 justify-between mt-6">
                    {/* AVATER */}
                    <Image width={40} height={40} src="https://media.istockphoto.com/id/1808025787/photo/portrait-of-a-young-female-tourist-in-front-of-the-giza-pyramids.jpg?s=1024x1024&w=is&k=20&c=fN7NEQmCOz-DsoSjFTnOWSCYjotvGXfzdiCNilCmnKo=" className="rounded-full w-10 h-10" alt="" />
                    {/* DESC */}
                    <div className="flex flex-col gap-4 flex-1">
                        <span className="font-medium">Gamal Ahmed</span>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam hic in deleniti quidem, explicabo a molestias exercitationem consequatur sunt placeat deserunt laborum commodi rem. Consequuntur repellendus perspiciatis reprehenderit ducimus quae.
                        </p>
                        {/* INTERACTION */}
                        <div className="flex items-center text-xs gap-8 text-gray-500">
                            <div className="flex items-center gap-4 mt-2">
                                <Image src="/liked.png" className="cursor-pointer" alt="" height={16} width={16} />
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-500">190</span>
                                <span className="hidden md:inline"> Likes</span>
                            </div>
                            <div className="">
                                <span className="">Reply</span>
                            </div>
                        </div>
                    </div>
                    {/* ICON */}
                    <Image src="/more.png" height={16} width={16} alt="" className="w-4 h-4 cursor-pointer" />

                </div>
  )
}

export default Comment