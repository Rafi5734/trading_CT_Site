import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import ImageUploader from "../../SharedComponent/ImageUploader/ImageUploader";
import toast from "react-hot-toast";
import { useMediaPostMutation } from "../../API/Media/mediaSlice";

const AddNewMedia = () => {
  const { user } = useContext(AuthContext);
  const [mediaPost, { isLoading }] = useMediaPostMutation();

  // For Deposit Screenshot send in backend
  const [imageUrl, setImageUrl] = useState("");
  const [mediaImage, setMediaImage] = useState();
  const imageUploadToken = import.meta.env.VITE_Image_Upload_Token;
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageUploadToken}`;
  const [imageHostLoading, setImageHostLoading] = useState(false);

  // console.log(mediaImage);

  let [mediaFormData, setMediaFormData] = useState({
    videoUrl: "",
    title: "",
    authorName: "",
    description: "",
  });

  const handleImageUpload = () => {
    setImageHostLoading(true);
    const formData = new FormData();
    formData.append("image", mediaImage);
    fetch(imageHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          setImageUrl(imgResponse.data.display_url);
          setImageHostLoading(false);
        }
        setImageHostLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setImageUrl("");
        setImageHostLoading(false);
      });
  };
  useEffect(() => {
    handleImageUpload();
  }, [mediaImage]);

  const handleMedia = async (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(mediaFormData);
    // console.log(imageUrl);
    if (
      mediaFormData.videoUrl === "" ||
      mediaFormData.title === "" ||
      mediaFormData.authorName === "" ||
      // mediaFormData.videoUrl === "" ||
      mediaFormData.description === ""
    ) {
      return toast.error("Please fill the required field!");
    }
    if (imageUrl === "") {
      return toast.error("Please upload a image screenshot!");
    }

    try {
      const setMediaFormData = {
        // videoUrl: mediaFormData?.videoUrl,
        title: mediaFormData?.title,
        authorName: mediaFormData?.authorName,
        videoUrl: "https://example.com/video.mp4",
        description: mediaFormData?.description,
      };

      // console.log("mediaFormData", mediaFormData);

      const postData = {
        videoUrl: mediaFormData?.videoUrl,
        image: imageUrl,
        title: mediaFormData?.title,
        authorName: mediaFormData?.authorName,
        description: mediaFormData?.description,
      };

      // console.log("postData", postData);
      const result = await mediaPost(postData);

      // console.log(result);

      if (result.error?.status === 500) {
        toast.error(result.error.data.message);
      }

      if (result.data?.success === true) {
        toast.success("Your media was successfully posted!");
        form.reset();
      } else {
        console.log("media error: ", result);
      }
    } catch (e) {
      console.log(e);
    }

    // Reset form fields after submission
    setMediaFormData({
      videoUrl: "",
      title: "",
      authorName: "",
      description: "", // Set imageUrl here after it's been updated
    });
    setMediaImage(null); // Reset the image state
    setImageUrl(""); // Reset the imageUrl state
  };

  const handleMediaInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setMediaFormData({
      ...mediaFormData,
      [name]: value,
    });
  };
  return (
    <div className="main-container">
      <div className="flex justify-center items-center -mt-[95px] md:-mt-[5px] lg:mt-[30px] xl:mt-[25px]">
        <div className="w-full mx-auto rounded-xl glass py-2 px-5">
          <div className="w-full mx-auto">
            <h1 className="text-center pt-3 subTitleStyle poppins">
              Create <span>a</span> new <span>media</span>.
            </h1>
          </div>
          <div className="poppins w-full lg:w-[95%] mx-auto">
            <div className="w-full flex flex-col md:flex-row-reverse gap-x-5 justify-around">
              <div className="w-[180px] mx-auto my-5 md:my-0 md:mx-0 md:w-[38%] md:pt-8 h-[200px] md:h-[300px] lg:h-[367px]">
                <ImageUploader image={mediaImage} setState={setMediaImage} />
              </div>
              <form
                onSubmit={(e) => {
                  handleMedia(e);
                }}
                className="w-full lg:w-[100%] mx-auto ps-0 pe-0"
              >
                <div className="w-full flex justify-center items-center flex-col">
                  <div className="w-full flex flex-col md:flex-row items-center sm:gap-2">
                    <div className="flex flex-col w-full justify-start pb-1 sm:pb-0">
                      <label className="text-[16px] font-medium font-montserrat mt-2">
                        Title
                      </label>
                      <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        onChange={handleMediaInputChange}
                        defaultValue={mediaFormData?.title}
                        required
                        className="font-montserrat border border-slate-500 px-3 bg-[#141a27] text-inherit w-full h-[50px] tracking-[0.3px] rounded-lg focus:outline-none pr-2"
                      />
                    </div>

                    <div className="flex flex-col w-full justify-start mt-1 sm:mt-0">
                      <label className="text-[16px] font-medium font-montserrat mt-2">
                        Author name
                      </label>
                      <input
                        type="text"
                        placeholder="Author name"
                        name="authorName"
                        onChange={handleMediaInputChange}
                        defaultValue={mediaFormData?.authorName}
                        required
                        className="font-montserrat border border-slate-500 px-3 bg-[#141a27] text-inherit w-full h-[50px] tracking-[0.3px] rounded-lg focus:outline-none pr-2"
                      />
                    </div>

                    <div className="flex flex-col w-full justify-start mt-1 sm:mt-0">
                      <label className="text-[16px] font-medium font-montserrat mt-2">
                        Video URL
                      </label>
                      <input
                        type="text"
                        placeholder="Video Url"
                        name="videoUrl"
                        onChange={handleMediaInputChange}
                        defaultValue={mediaFormData?.videoUrl}
                        required
                        className="font-montserrat border border-slate-500 px-3 bg-[#141a27] text-inherit w-full h-[50px] tracking-[0.3px] rounded-lg focus:outline-none pr-2"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full justify-start mt-1.5">
                    <label className="text-[16px] font-medium font-montserrat mt-2">
                      Description
                    </label>
                    <div className="flex">
                      {/* <input
                        type="text"
                        placeholder="Deposit Address"
                        name="depositAddress"
                        // value={depositFormData?.depositAddress}
                        onChange={handleLoginInputChange}
                        className="font-montserrat border border-slate-500 px-3 bg-[#141a27] text-inherit w-full h-[50px] tracking-[0.3px] rounded-lg focus:outline-none pr-2"
                      /> */}

                      <textarea
                        type="text"
                        placeholder="Description is here"
                        name="description"
                        onChange={handleMediaInputChange}
                        defaultValue={mediaFormData?.description}
                        className="pt-3 font-montserrat border border-slate-500 px-3 bg-[#141a27] text-inherit w-full h-28 tracking-[0.3px] rounded-lg focus:outline-none pr-2"
                        required
                      ></textarea>
                    </div>
                  </div>

                  {imageHostLoading ? (
                    <div className="w-full md:w-[300px] mx-auto flex items-center justify-center bg-primary duration-200 py-[14px] px-5 rounded-full mt-8 mb-3">
                      <span className="loading loading-bars loading-xs"></span>
                      <span className="loading loading-bars loading-xs"></span>
                      <span className="loading loading-bars loading-xs"></span>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="cursor-pointer w-full md:w-[300px] mx-auto bg-primary hover:glass duration-200 p-[10px] px-5 rounded-full mt-8 mb-3 font-montserrat flex items-center justify-center gap-2"
                    >
                      <p className="poppins font-medium">Submit Request</p>
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewMedia;
