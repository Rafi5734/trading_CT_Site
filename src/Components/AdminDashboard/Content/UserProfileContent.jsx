import logo from '../../../assets/images/logo.png';
const UserProfileContent = ({ data }) => {
  const date = new Date(data?.createdAt);

  // Format the date as a string in a custom format
  const formattedDate =
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    date.getDate().toString().padStart(2, "0") +
    "-" +
    date.getFullYear() +
    " " +
    (date.getHours() % 12 || 12) +
    ":" +
    date.getMinutes().toString().padStart(2, "0") +
    " " +
    (date.getHours() >= 12 ? "PM" : "AM");

  return (
    <div>
      <img
        src={data?.image || logo}
        className="w-full max-w-[200px] h-full max-h-[300px] border-2 p-2 border-primary rounded-lg mb-1"
        alt="user"
      />
      <h1>{data?.name}</h1>

      <div className="my-2">
        <p className="text-primary">{data?.email}</p>
        <p className="text-primary">{data?.phone}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-x-2 gap-y-2 text-center mt-2 mb-4 justify-between">
        <span className="text-[14px] dark:bg-green-900 dark:text-green-300 text-green-900 p-1 py-[2px] rounded-md capitalize px-1">
          current balance {data?.current_balance}
        </span>
        <span className="text-[14px] dark:bg-green-900 dark:text-green-300 text-green-900 p-1 py-[2px] rounded-md capitalize px-1">
          Payment Status: {data?.payment_status}
        </span>
        <span className="text-[14px] dark:bg-green-900 dark:text-green-300 text-green-900 p-1 py-[2px] rounded-md capitalize px-1">
          Total Plan: {data?.total_plans}
        </span>
      </div>

      <p className="text-blue-800 py-1 text-center rounded-md dark:bg-blue-900 dark:text-blue-300 w-full">
        {formattedDate}
      </p>
    </div>
  );
};

export default UserProfileContent;