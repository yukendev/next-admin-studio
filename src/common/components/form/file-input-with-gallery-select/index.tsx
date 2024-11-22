import { Group, Input, Radio, Stack } from "@mantine/core";
import { IconPhoto } from "@tabler/icons-react";
import { type ComponentProps, type ReactNode, useId } from "react";

import { isEmpty } from "@/common/lib/guard";

import { ErrorMessages } from "../error-messages";
import { FileInput } from "../file-input";
import { GallerySelect } from "./gallery-select";
import type { FileInputWithGalleryInputType } from "./type";

const OPTIONS = [
  { value: "select", label: "ギャラリーから選択" },
  { value: "upload", label: "アップロードする" },
];

type Props = {
  label?: string;
  description?: ReactNode;
  disabled?: boolean;
  required?: boolean;
  errorMessages?: string[];
  gallerySelectProps: ComponentProps<typeof GallerySelect>;
  fileInputProps?: ComponentProps<typeof FileInput>;
  radioProps: {
    value: FileInputWithGalleryInputType;
    onChange: (value: string) => void;
  };
};

export const FileInputWithGallerySelect = ({
  label,
  description,
  disabled = false,
  required = false,
  errorMessages,
  gallerySelectProps,
  fileInputProps,
  radioProps,
}: Props) => {
  const radioButtonLabelId = useId();
  const descriptionId = useId();
  const isSelect = radioProps.value === "select";
  const hasError = errorMessages && !isEmpty(errorMessages);

  return (
    <Stack gap="xs">
      {label && (
        <Input.Label
          size="lg"
          fw="bold"
          required={required}
          id={radioButtonLabelId}
        >
          {label}
        </Input.Label>
      )}
      {description && (
        <Input.Description size="lg" c="dark" id={descriptionId}>
          {description}
        </Input.Description>
      )}
      <Radio.Group
        name="inputType"
        size="lg"
        {...radioProps}
        styles={{
          label: { fontWeight: "bold" },
        }}
        mt={-10}
        aria-labelledby={label ? radioButtonLabelId : undefined}
        aria-label={label ? undefined : "画像選択方法のラジオボタン"}
      >
        <Group mt="xs">
          {OPTIONS.map(({ value, label }) => (
            <Radio
              key={value}
              value={value}
              label={label}
              styles={{
                body: {
                  alignItems: "center",
                },
              }}
              disabled={disabled}
            />
          ))}
        </Group>
      </Radio.Group>
      {isSelect ? (
        <GallerySelect
          {...gallerySelectProps}
          disabled={disabled}
          discriptionId={descriptionId}
        />
      ) : (
        <FileInput
          accept="image/*"
          leftSection={<IconPhoto stroke={1.5} />}
          placeholder="クリックして画像をアップロード"
          disabled={disabled}
          aria-describedby={descriptionId}
          {...fileInputProps}
        />
      )}
      {hasError && <ErrorMessages messages={errorMessages} />}
    </Stack>
  );
};
