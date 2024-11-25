import { Stack, Text } from "@mantine/core";
import type { FC } from "react";

import { CheckboxGroup } from "@/common/components/form/checkbox-group";
import { RadioButtonGroup } from "@/common/components/form/radio-button-group";
import { match } from "ts-pattern";
import {
  PROFILE_DISTRIBUTION_METHOD_BY_CONDITION_CARD_OPTIONS,
  PROFILE_DISTRIBUTION_METHOD_BY_CONDITION_CARD_STATUS_OPTIONS,
} from "./const";
import { useProfileDistributionMethodByConditionInputCards } from "./hook";

export const ProfileDistributionMethodByConditionInputCards: FC = () => {
  const { checkBoxProps, radioButtonProps } =
    useProfileDistributionMethodByConditionInputCards();
  return (
    <Stack>
      <RadioButtonGroup
        label="カード選択"
        description="会員が選択、または紐付けしているカードで絞り込みます。"
        {...radioButtonProps}
        options={PROFILE_DISTRIBUTION_METHOD_BY_CONDITION_CARD_STATUS_OPTIONS}
      />

      {match(radioButtonProps.value)
        .with("YES", () => (
          <Stack>
            <Text>
              チェックを入れたカードをお持ちの会員に配布されます。
              <br />
              複数選択の場合は、いずれかのカードを持っている会員に配布されます（OR条件）。
            </Text>
            <CheckboxGroup
              options={PROFILE_DISTRIBUTION_METHOD_BY_CONDITION_CARD_OPTIONS}
              {...checkBoxProps.yes}
              isVertical
            />
          </Stack>
        ))
        .with("NO", () => (
          <Stack>
            <Text>
              チェックを入れたカードをお持ちでない会員に配布されます。
              <br />
              複数選択の場合は、いずれかのカードを持っていない会員に配布されます（OR条件）。
            </Text>
            <CheckboxGroup
              options={PROFILE_DISTRIBUTION_METHOD_BY_CONDITION_CARD_OPTIONS}
              {...checkBoxProps.no}
              isVertical
            />
          </Stack>
        ))
        .with("ANY", () => <></>)
        .exhaustive()}
    </Stack>
  );
};
