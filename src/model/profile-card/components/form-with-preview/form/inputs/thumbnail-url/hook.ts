import type { InputType } from "@/common/components/form/file-input-with-gallery-select";
import { useCallback } from "react";
import { useProfileCardFormStore } from "../../../store/hook";

export const useProfileCardThumbnailUrlInput = () => {
  // InputType選択ラジオボタン関係の処理
  const inputType = useProfileCardFormStore(
    (state) => state.thumbnailUrlInputType,
  );
  const setInputType = useProfileCardFormStore(
    (state) => state.setThumbnailUrlInputType,
  );
  const handleRadioChange = (inputType: string) => {
    setInputType(inputType as InputType);
  };

  // FileInput関係の処理
  const file = useProfileCardFormStore((state) => state.thumbnailUrlInputFile);
  const setUploadedUrl = useProfileCardFormStore(
    (state) => state.setThumbnailUploadedUrl,
  );
  const setFile = useProfileCardFormStore(
    (state) => state.setThumbnailUrlInputFile,
  );
  const onUpload = useCallback(
    async (file: File | null) => {
      // ファイルアップロード処理
      const uploadedUrl = "example.com/uploaded-file";

      // アップロードしたファイルをストアに保存
      setUploadedUrl(uploadedUrl);
      setFile(file);
    },
    [setUploadedUrl, setFile],
  );

  // GallerySelect関係の処理
  const galleryItem = useProfileCardFormStore(
    (state) => state.thumbnailUrlGalleryItem,
  );
  const setGalleryItem = useProfileCardFormStore(
    (state) => state.setThumbnailUrlGalleryItem,
  );

  const getErrorMessages = useProfileCardFormStore(
    (state) => state.getThumbnailUrlErrorMessages,
  );

  const errorMessages = getErrorMessages();

  return {
    fileInputProps: { value: file, onChange: onUpload },
    gallerySelectProps: {
      value: galleryItem,
      onChange: setGalleryItem,
    },
    radioProps: { value: inputType, onChange: handleRadioChange },
    errorMessages,
  };
};
