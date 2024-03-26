const MessageDetailsContent = ({data}) => {
    return (
        <div className="font-montserrat">
        <h1 className="text-base text-blue-300 font-medium"><span className="dark:bg-blue-900 dark:text-blue-300 p-1 py-[2px] rounded-md">Subject:</span> <span>{data?.subject}</span></h1>
            <textarea className="w-full text-[15px] text-blue-800 dark:bg-blue-900 dark:text-blue-300 min-h-[120px] h-auto mt-2 rounded-lg px-3 py-2" disabled type="text" value={data?.question} />

            <div className="flex flex-col sm:flex-row gap-x-2 mt-2">
                <span className="text-[14px] dark:bg-green-900 dark:text-green-300 text-green-900 p-1 py-[2px] rounded-md">{data?.name}</span>
                <span className="text-[14px] dark:bg-green-900 dark:text-green-300 text-green-900 p-1 py-[2px] rounded-md">{data?.email}</span>
                <span className="text-[14px] dark:bg-green-900 dark:text-green-300 text-green-900 p-1 py-[2px] rounded-md">{data?.telephone}</span>
            </div>
        </div>
    );
};

export default MessageDetailsContent;