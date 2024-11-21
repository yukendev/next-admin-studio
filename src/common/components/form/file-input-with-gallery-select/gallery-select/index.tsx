import { ScrollArea, SimpleGrid, UnstyledButton } from "@mantine/core";
import Image from "next/image";
import { type CSSProperties, type FC, useCallback } from "react";

import { GALLERY_ITEMS } from "./const";
import type { GalleryItem } from "./type";

const GALLERY_ITEM_STYLE: CSSProperties = {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
};

type Props = {
  imgs?: GalleryItem[];
  value: GalleryItem | null;
  onChange: (value: GalleryItem) => void;
  disabled?: boolean;
  discriptionId?: string;
};

export const GallerySelect: FC<Props> = ({
  imgs = GALLERY_ITEMS,
  onChange,
  disabled = false,
  discriptionId,
}) => {
  const handleSelect = useCallback(
    (img: GalleryItem) => () => {
      onChange(img);
    },
    [onChange],
  );

  return (
    <ScrollArea data-testid="gallery-select" aria-describedby={discriptionId}>
      <SimpleGrid
        maw={600}
        cols={3}
        bg="gray.0"
        spacing="sm"
        p="sm"
        style={{
          borderRadius: "8px",
        }}
      >
        {imgs.map((img) => (
          <UnstyledButton
            key={img.url}
            onClick={handleSelect(img)}
            disabled={disabled}
          >
            <Image
              src={img.url}
              alt={img.alt}
              sizes="100vw"
              style={GALLERY_ITEM_STYLE}
              width={300}
              height={300}
            />
          </UnstyledButton>
        ))}
      </SimpleGrid>
    </ScrollArea>
  );
};
