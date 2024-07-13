export default function Status({ items }: { items: any[] }) {
    


    return (<>
        <div className='mt-2 flex flex-col gap-3 relative'>
            {items.map((item: any, index: any) => (
                <><div className='flex flex-row gap-3 items-center'>
                    <div className={`${item.st? "border-beamin":''}  w-10 h-10 rounded-full border border-solid flex justify-center items-center`}>
                        <span className={`  ${item.st? "text-beamin":'text-gray-600'}     ` }>{item.number}</span>
                    </div>
                    <div className={` text-wrap text-[14px] ${item.st? "text-beamin":'text-gray-600'}     ` }>
                        {item.name}
                    </div>
                </div>
                {items.length-1 !=index &&
                <div className='relative flex flex-col left-4 bottom-5 text-xl font-bold gap-1 '>
                        <span className={` h-2  ${item.st? "text-beamin":'text-gray-600'}     ` }>.</span>
                        <span className={` h-2 ${item.st? "text-beamin":'text-gray-600'}     ` }>.</span>
                        <span className={` h-2 ${item.st? "text-beamin":'text-gray-600'}     ` }>.</span>
                        <span className={` h-2 ${item.st? "text-beamin":'text-gray-600'}     ` }>.</span>
                        <span className={` h-2 ${item.st? "text-beamin":'text-gray-600'}     ` }>.</span>
                    </div>
                    }
                    </>
            ))}
        </div>


    </>)


}