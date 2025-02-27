import {
  TableProps as BaseTableProps,
  TableBuilderProps as BaseTableBuilderProps,
  TableBuilderColumnProps as BaseTableBuilderColumnProps,
} from "baseui/table-semantic/types";

export enum TABLE_SIZE {
  compact = "compact",
  default = "default",
  spacious = "spacious",
}

export enum TABLE_DIVIDER {
  horizontal = "horizontal",
  vertical = "vertical",
  grid = "grid",
  clean = "clean",
}

export type TableProps = BaseTableProps & {
  size?: TABLE_SIZE;
  divider?: TABLE_DIVIDER;
};

export type TableBuilderProps = BaseTableBuilderProps<any> & {
  size?: TABLE_SIZE;
  divider?: TABLE_DIVIDER;
};

export type TableBuilderColumnProps = BaseTableBuilderColumnProps<any> & {
  size?: TABLE_SIZE;
  divider?: TABLE_DIVIDER;
};
