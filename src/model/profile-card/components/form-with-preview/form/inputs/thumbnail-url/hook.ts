import type { InputType } from "@/common/components/form/file-input-with-gallery-select";
import { useCallback } from "react";
import { match } from "ts-pattern";
import { useProfileCardFormStore } from "../../../store/hook";

export const useProfileCardThumbnailUrlInput = () => {
  const setUploadedUrl = useProfileCardFormStore(
    (state) => state.setThumbnailUrl,
  );

  // InputType選択ラジオボタン関係の処理
  const inputType = useProfileCardFormStore(
    (state) => state.thumbnailUrlInputType,
  );
  const setInputType = useProfileCardFormStore(
    (state) => state.setThumbnailUrlInputType,
  );
  const handleRadioChange = (inputType: string) => {
    setInputType(inputType as InputType);
    match(inputType)
      .with("upload", () => {
        setUploadedUrl(fileInput.url);
      })
      .with("select", () => {
        setUploadedUrl(galleryItem?.url ?? null);
      });
  };

  // FileInput関係の処理
  const fileInput = useProfileCardFormStore(
    (state) => state.thumbnailUrlFileInput,
  );
  const setFile = useProfileCardFormStore(
    (state) => state.setThumbnailUrlFileInput,
  );
  const onUpload = useCallback(
    async (file: File | null) => {
      // ファイルアップロード処理
      const uploadedUrl = "example.com/uploaded-file";

      // アップロードしたファイルをストアに保存
      setFile({ file, url: uploadedUrl });
    },
    [setFile],
  );

  // GallerySelect関係の処理
  const galleryItem = useProfileCardFormStore(
    (state) => state.thumbnailUrlGalleryInput.item,
  );
  const setGalleryItem = useProfileCardFormStore(
    (state) => state.setThumbnailUrlGalleryInput,
  );

  const getErrorMessages = useProfileCardFormStore(
    (state) => state.getThumbnailUrlErrorMessages,
  );

  const errorMessages = getErrorMessages();

  return {
    fileInputProps: { value: fileInput.file, onChange: onUpload },
    gallerySelectProps: {
      value: galleryItem,
      onChange: setGalleryItem,
    },
    radioProps: { value: inputType, onChange: handleRadioChange },
    errorMessages,
  };
};
