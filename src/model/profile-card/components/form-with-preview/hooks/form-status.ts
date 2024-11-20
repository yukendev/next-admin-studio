import {
  CONTENT_STATUS,
  type ContentStatus,
} from "@/model/common/const/content-status";

export const useProfileCardFormStatus = (): ContentStatus => {
  // TODO: フォームのステータスを取得する
  return CONTENT_STATUS.NEW;
};
