const PhotoModalContent = (photoUrl) => {
  return (
    <div className="flex items-center justify-center w-full h-full max-h-[475px] rounded-xl">
      {photoUrl ? (
        <img
          src={photoUrl.photoUrl}
          alt="Payment photo"
          className="w-full h-full max-h-[475px] rounded-xl"
        />
      ) : (
        <span className="loading loading-dots loading-md"></span>
      )}
    </div>
  );
};

export default PhotoModalContent;
