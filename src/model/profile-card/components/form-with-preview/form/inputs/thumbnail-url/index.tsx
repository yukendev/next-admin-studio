"use client";

import type { FC } from "react";

import { FileInputWithGallerySelect } from "@/common/components/form/file-input-with-gallery-select";
import { useProfileCardThumbnailUrlInput } from "./hook";

export const ProfileCardThumbnailUrlInput: FC = () => {
  const { fileInputProps, gallerySelectProps, radioProps, errorMessages } =
    useProfileCardThumbnailUrlInput();

  return (
    <FileInputWithGallerySelect
      label="サムネイル"
      description={
        <>
          理想的なサイズは300×300px以上の正方形です。
          <br />
          縦横それぞれ1200px以内に収まるように加工をお願いします。
        </>
      }
      required
      errorMessages={errorMessages}
      fileInputProps={fileInputProps}
      gallerySelectProps={gallerySelectProps}
      radioProps={radioProps}
    />
  );
};
