import { useGetMediaListQuery } from "../../API/Media/mediaSlice";
import MediaListTable from "../../Components/AdminDashboard/MediaListTable";
const ManageMedia = () => {
  const { data: mediaList, isLoading } = useGetMediaListQuery();

  // console.log(mediaList?.data);

  const tableHead = [
    { id: 1, name: "SL", width: 50 },
    { id: 2, name: "Image", width: 50 },
    { id: 3, name: "Title", width: 90 },
    { id: 4, name: "Author Name", width: 150 },
    { id: 5, name: "description", width: 120 },
    { id: 6, name: "Action", width: 50 },
  ];
  return (
    <div>
      <MediaListTable
        pageTitle="All Media List"
        tableHead={tableHead}
        tableData={mediaList?.data}
        searchOption={true}
        // isLoading={adminLoading}
        // refetch={refetch}
      />
    </div>
  );
};

export default ManageMedia;
