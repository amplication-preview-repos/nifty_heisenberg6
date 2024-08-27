import { SortOrder } from "../../util/SortOrder";

export type ChannelOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  uniqueId?: SortOrder;
  updatedAt?: SortOrder;
};
